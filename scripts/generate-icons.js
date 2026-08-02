import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    let c = (crc ^ buf[i]) & 0xff;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    crc = c ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  const typeAndData = chunk.subarray(4, 8 + len);
  const crc = crc32(typeAndData);
  chunk.writeUInt32BE(crc, 8 + len);
  return chunk;
}

function createTransparentTrianglePNG(width, height, strokeWidthPercent = 0.09) {
  const R = 0;
  const G = 196;
  const B = 205;
  const A = 255;

  const rawData = Buffer.alloc(height * (1 + width * 4));

  function distToSegment(px, py, x1, y1, x2, y2) {
    const l2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    if (l2 === 0) return Math.hypot(px - x1, py - y1);
    let t = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / l2;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(px - (x1 + t * (x2 - x1)), py - (y1 + t * (y2 - y1)));
  }

  const p1 = { x: width * 0.5, y: height * 0.18 };
  const p2 = { x: width * 0.12, y: height * 0.82 };
  const p3 = { x: width * 0.88, y: height * 0.82 };

  const strokeWidth = width * strokeWidthPercent;
  const halfStroke = strokeWidth / 2;

  let offset = 0;
  for (let y = 0; y < height; y++) {
    rawData[offset++] = 0; // Filter byte 0 (None)
    for (let x = 0; x < width; x++) {
      const px = x + 0.5;
      const py = y + 0.5;

      const d1 = distToSegment(px, py, p1.x, p1.y, p2.x, p2.y);
      const d2 = distToSegment(px, py, p2.x, p2.y, p3.x, p3.y);
      const d3 = distToSegment(px, py, p3.x, p3.y, p1.x, p1.y);

      const minDist = Math.min(d1, d2, d3);

      let alpha = 0;
      if (minDist <= halfStroke - 0.75) {
        alpha = 1;
      } else if (minDist <= halfStroke + 0.75) {
        alpha = (halfStroke + 0.75 - minDist) / 1.5;
      }

      if (alpha > 0) {
        rawData[offset++] = R;
        rawData[offset++] = G;
        rawData[offset++] = B;
        rawData[offset++] = Math.round(A * alpha);
      } else {
        rawData[offset++] = 0;
        rawData[offset++] = 0;
        rawData[offset++] = 0;
        rawData[offset++] = 0; // Fully transparent background
      }
    }
  }

  const compressedData = zlib.deflateSync(rawData);
  const header = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8;
  ihdrData[9] = 6; // RGBA
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;

  const ihdrChunk = makeChunk('IHDR', ihdrData);
  const idatChunk = makeChunk('IDAT', compressedData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([header, ihdrChunk, idatChunk, iendChunk]);
}

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const appleTouchIconBuf = createTransparentTrianglePNG(180, 180, 0.09);
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleTouchIconBuf);

const favicon32Buf = createTransparentTrianglePNG(32, 32, 0.12);
fs.writeFileSync(path.join(publicDir, 'favicon.png'), favicon32Buf);

console.log('Icons generated successfully in public/');

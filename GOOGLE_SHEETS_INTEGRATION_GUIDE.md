# Complete Guide: Linking Astryd Contact Form with Google Sheets

This guide provides a step-by-step walkthrough to automatically send all demo requests from the Astryd website contact form (`CTASection.tsx`) directly into a **Google Sheet** using **Google Apps Script**.

---

## 🏗️ Architecture Overview

```
[ Astryd Contact Form ] ── (POST JSON) ──> [ Google Apps Script Web App ] ── (Append Row) ──> [ Google Sheet ]
```

- **Frontend**: React + Vite (`CTASection.tsx`)
- **Backend (Serverless)**: Google Apps Script Web App
- **Database**: Google Sheet

---

## 📊 Step 1: Create & Setup Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a **Blank Spreadsheet**.
2. Name your spreadsheet (e.g., `Astryd Website Leads`).
3. In **Sheet1**, add the following column headers in Row 1:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| **Timestamp** | **Full Name** | **Work Email** | **Company Name** | **Phone** | **Region / State** | **Requirements** | **Source** |

4. Format Row 1 (Bold, Background fill: Cyan/Dark Navy, Freeze row 1 if desired).

---

## 📜 Step 2: Add Google Apps Script Code

1. In your Google Sheet, click **Extensions** in the top menu bar.
2. Select **Apps Script**.
3. Delete any default code in `Code.gs` and paste the following script:

```javascript
/**
 * Astryd Website Contact Form Handler
 * Appends demo request submissions directly to Google Sheet
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Prevent concurrent write collisions

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse JSON payload from POST request
    var data = {};
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    }

    var timestamp = new Date();
    var name = data.name || '';
    var email = data.email || '';
    var company = data.company || '';
    var phone = data.phone || '';
    var region = data.region || '';
    var describe = data.describe || '';
    var source = data.source || 'Astryd Website';

    // Append new row to Google Sheet
    sheet.appendRow([
      timestamp,
      name,
      email,
      company,
      phone,
      region,
      describe,
      source
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Lead added successfully' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'active', message: 'Astryd Lead Collector Webhook is Live' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

---

## 🚀 Step 3: Deploy as Web App

> ⚠️ **CRITICAL**: Follow these exact permission settings or submissions will be blocked by CORS/Auth errors!

1. In the Apps Script editor, click **Deploy** (top right blue button) ➔ **New deployment**.
2. Click the gear icon ⚙️ next to **Select type** and choose **Web app**.
3. Fill in the deployment configuration:
   - **Description**: `Astryd Website Contact Form Collector`
   - **Execute as**: `Me (your-email@gmail.com)`
   - **Who has access**: `Anyone` *(Must be "Anyone" so visitors can submit without Google login)*
4. Click **Deploy**.
5. Grant permissions if prompted (*Advanced ➔ Go to Astryd Script (unsafe) ➔ Allow*).
6. Copy the generated **Web App URL**.
   - It will look like: `https://script.google.com/macros/s/AKfycbx.../exec`

---

## 💻 Step 4: Configure Environment Variable in Astryd Codebase

1. In the root directory of `astryd-website`, create or update `.env`:

```env
VITE_GOOGLE_SHEET_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID_HERE/exec"
```

Replace `YOUR_DEPLOYMENT_ID_HERE` with your actual Apps Script Web App URL.

---

## 🛠️ Step 5: Updated React Contact Form Component (`CTASection.tsx`)

Here is how the submission logic is wired up in `CTASection.tsx`:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!name || !email || !company || !region || !describe) return;

  setIsSubmitting(true);
  setSubmitError(null);

  const webhookUrl = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL;

  const payload = {
    name,
    email,
    company,
    phone,
    region,
    describe,
    source: "Astryd Website CTA",
    timestamp: new Date().toISOString(),
  };

  try {
    if (webhookUrl) {
      // Send POST request to Google Apps Script
      await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script redirects
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } else {
      console.log("No VITE_GOOGLE_SHEET_WEBHOOK_URL configured. Submission payload:", payload);
    }

    setSubmitted(true);
  } catch (err) {
    console.error("Form submission error:", err);
    setSubmitError("Failed to submit demo request. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## 🧪 Step 6: Verification & Testing

1. Start your development server:
   ```bash
   npm run dev
   ```
2. Navigate to the **Book a demo** form on your site.
3. Fill out the form (e.g. Name: Jane Doe, Email: jane@example.com).
4. Click **Submit demo request**.
5. Check your **Google Sheet** — a new row with timestamp and lead details will appear instantly!

---

## ❓ Troubleshooting

| Issue | Solution |
|---|---|
| **Form submits, but no row appears in Google Sheet** | Make sure **Who has access** in Apps Script Deployment is set to **"Anyone"** (not "Only myself"). |
| **CORS Error in Browser Console** | Ensure your `fetch` call uses `mode: "no-cors"`. Google Apps Script returns 302 redirects which browser CORS blocks if `no-cors` is not specified. |
| **Data fields are blank in Sheet** | Verify field key names in React payload (`name`, `email`, `company`, etc.) match `data.name`, `data.email` in `Code.gs`. |

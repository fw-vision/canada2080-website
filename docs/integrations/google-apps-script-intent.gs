const ALLOWED_ROLES = new Set([
  'Evidence and research',
  'Capital and finance',
  'Institutional capacity',
  'Policy and public leadership',
  'Operations and manufacturing',
  'Regional and community leadership',
  'Independent measurement'
]);

function doPost(event) {
  const lock = LockService.getScriptLock();

  try {
    if (!lock.tryLock(5000)) {
      return response_({ ok: false, error: 'Please try again.' });
    }
    const values = event && event.parameter ? event.parameter : {};

    if (String(values.website || '').trim()) {
      return response_({ ok: true });
    }

    const name = clean_(values.name, 120);
    const email = clean_(values.email, 254).toLowerCase();
    const organization = clean_(values.organization, 160);
    const role = clean_(values.role, 80);
    const note = clean_(values.note, 800);
    const consent = values.consent === 'yes';

    if (!name || !validEmail_(email) || !ALLOWED_ROLES.has(role) || !consent) {
      return response_({ ok: false, error: 'Invalid submission.' });
    }

    const sheetId = PropertiesService.getScriptProperties().getProperty('SHEET_ID');
    if (!sheetId) throw new Error('SHEET_ID is not configured.');

    const sheet = SpreadsheetApp.openById(sheetId).getSheetByName('Intent');
    if (!sheet) throw new Error('Intent sheet does not exist.');

    sheet.appendRow([new Date(), name, email, organization, role, note, 'yes']);
    return response_({ ok: true });
  } catch (error) {
    console.error(error);
    return response_({ ok: false, error: 'Submission could not be recorded.' });
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function clean_(value, maxLength) {
  const text = String(value || '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim();
  const safe = /^[=+\-@]/.test(text) ? `'${text}` : text;
  return safe.slice(0, maxLength);
}

function validEmail_(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function response_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

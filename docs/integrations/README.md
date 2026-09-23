# Intent capture setup

1. Create a restricted Google Sheet with a worksheet named `Intent` and columns: timestamp, name, email, organization, role, note, consent.
2. Create a standalone Apps Script project and paste `google-apps-script-intent.gs` into it.
3. Add the Sheet ID as the `SHEET_ID` script property. Do not put it in the website repository.
4. Deploy as a web app that executes as the owner and accepts requests from anyone with the deployment URL.
5. Test validation, the honeypot, spreadsheet-formula escaping, and write permissions.
6. Build the website with `PUBLIC_INTENT_FORM_ENDPOINT` set to the deployment URL.
7. Restrict Sheet access, review submissions only for the stated purpose, and define a retention/deletion review before production collection.

The web app URL is public by design. Never use it as a credential or expose privileged operations through it. Event RSVPs, accessibility details, and attendance confirmation stay in a separate controlled workflow.

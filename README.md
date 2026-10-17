# SeaRoute AI — Blue / Sky-Blue GitHub Website

A responsive, bilingual (English/Bangla) static website prototype for a coastal fishing safety project. It uses plain HTML, CSS, and JavaScript, so it can be hosted directly on GitHub Pages without Node.js, npm, Vite, or a build step.

## Website contents

- `index.html` — semantic page structure, sections, forms, and accessibility landmarks.
- `styles.css` — responsive design, blue/sky-blue gradients, cards, layout, reduced-motion support, and mobile styles.
- `app.js` — bilingual language switching, trip planner, local trip storage, checklist progress, downloadable trip summary, and a transparent rule-based safety helper.
- `README.md` — this project guide.

## Functional features in this prototype

1. **English / Bangla switch:** translates page labels, content, prompts, and tool descriptions.
2. **Trip planner:** validates required fields and stores a trip brief in browser local storage.
3. **Safety checklist:** eight items, progress percentage, persistent checked state, and reset.
4. **Safety thinking assistant:** provides predefined rule-based general guidance based on keywords (weather/warnings, equipment, shore contacts, emergencies, and trip planning).
5. **Saved trip view:** displays stored details, downloads a plain-text summary, or deletes the saved plan.
6. **Responsive interface:** mobile, tablet, and desktop layout.
7. **Accessibility:** semantic HTML, keyboard-visible focus, status announcements, skip link, labels, and reduced-motion support.
8. **Privacy by default:** the prototype does not send questions or trip data to a server. Saved data stays in the browser where local storage is available.

## Publish to GitHub Pages

### Option A — Upload in the GitHub website

1. Download and extract the project ZIP.
2. Open your repository named `searoute-ai` on GitHub.
3. Click **Add file → Upload files**.
4. Upload `index.html`, `styles.css`, `app.js`, and `README.md` to the repository root (not a nested folder).
5. Commit changes to your default branch, usually `main`.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, select **Deploy from a branch**.
8. Choose branch `main` and folder `/(root)`, then click **Save**.
9. Wait for deployment, then open `https://YOUR-USERNAME.github.io/searoute-ai/`.

Replace `YOUR-USERNAME` with your GitHub username. The repository must be named `searoute-ai` for that exact path.

### Option B — Replace the existing files

If the old project is already in the repository, upload the three website files (`index.html`, `styles.css`, `app.js`) to the repository root and accept replacing files with matching names. The website does not require the old Vite files. You can leave unrelated files in place, but ensure GitHub Pages is configured to publish the root of the `main` branch.

## Testing checklist

After GitHub Pages finishes publishing:

- Open the published URL and confirm the page loads.
- Click the Bangla/English switch.
- Fill out and save the trip planner; check that the summary appears below.
- Refresh the page; confirm the trip remains saved in the same browser.
- Mark and unmark checklist items; confirm the percentage updates and remains after refresh.
- Ask the helper about equipment, a shore contact, weather warnings, or an emergency.
- Download the saved trip summary.
- Delete the saved trip and reset the checklist.
- Test the page at a narrow phone width.

Browser storage can be disabled or cleared by private-browsing settings; if so, local saving may not persist.

## Architecture

This is a **static client-side application**. The browser loads HTML, CSS, and JavaScript from GitHub Pages. It has no server, database, authentication, external AI provider, or live marine data connection.

### Is the assistant real AI?

Not yet. The current assistant is a deterministic keyword/rule-based prototype. It returns prepared guidance from JavaScript and is useful for demonstrating an interactive safety-preparation workflow, but it is not a generative AI model and cannot understand every question. The UI and project documentation must not describe it as a live AI service.

### Adding a real AI service safely

To integrate a real language model later:

1. Create a separate server-side API (for example, a serverless function or managed backend).
2. Store the AI provider API key in that backend's secret/environment settings. **Never place a secret key in `app.js`, HTML, or any public GitHub repository.**
3. Have the frontend call your own backend endpoint over HTTPS.
4. Validate and rate-limit requests; avoid sending names, phone numbers, exact personal location, or other sensitive details unless essential and consented to.
5. Clearly label AI-generated content, communicate uncertainty, and offer a way to report errors.
6. Do not let the model make final go/no-go decisions or produce unverified navigation instructions. Use trusted marine data providers and qualified human review for any safety-critical capability.
7. Add tests for prompt injection, incorrect advice, language quality, and failure/offline states.

## Safety and responsible use

- No live marine weather, tide data, GPS, nautical charts, vessel tracking, route calculation, or emergency dispatch is connected.
- Never use this prototype to decide whether it is safe to depart or to choose a real route.
- Check official Bangladesh marine weather and maritime warnings and follow relevant local authorities.
- The checklist is a reminder, not a safety certification.
- Local storage is not encrypted application storage and is not shared across devices. Do not save highly sensitive information.
- Test wording and usability with local fishers before real-world use. Track usability and comprehension, not unsupported claims of lives saved.

## Fix included in this update

- Restored the saved language preference after the checklist and trip UI are initialized. This fixes a startup crash that could occur when Bangla had been saved previously and could prevent the chat handlers from loading.
- Expanded the assistant's English/Bangla keyword matching for common questions about sea conditions, wind, waves, equipment, radio, emergencies, and late check-ins.
- Kept the app as a static GitHub Pages site. The assistant is still rule-based, not a connected generative AI model; it does not fetch live weather or provide navigation decisions.

## Troubleshooting

**Blank page**
- Verify `index.html`, `styles.css`, and `app.js` are all at the repository root.
- Verify the HTML references `./styles.css` and `./app.js`.
- Confirm Pages publishes the correct branch and `/(root)` directory.
- Wait for deployment to finish, then hard-refresh the browser.
- Open browser developer tools → Console and look for a missing file or JavaScript error.

**Styles or interactions missing**
- Check that file names match exactly, including lowercase spelling.
- Ensure the files were committed to the branch selected in Pages.
- If the repository URL uses `/searoute-ai/`, keep relative paths beginning `./` rather than root-absolute paths.

## License

No license has been specified. Add a license file if you want to explicitly grant others permission to reuse or modify this project.

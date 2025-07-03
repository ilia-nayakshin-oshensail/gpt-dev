# GPT Dev Notion Example

This project demonstrates a simple Node.js app for Glitch that reads data from Notion and exposes a minimal API. It is intentionally small and modular so you can later adapt it to other storage backends such as SQL databases.

## Getting started on Glitch

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Add environment variables**
   - `NOTION_TOKEN` – your Notion integration token
   - `PORT` – port the server should listen on (Glitch sets this automatically)

3. **Run the app**
   ```bash
   npm start
   ```

## Endpoints

- `/` – basic health check
- `/database/:id` – returns the contents of a Notion database
- `/page/:id` – returns a single Notion page

Update `src/notionApi.js` and `src/server.js` as needed to expand functionality. The current layout keeps modules flat and easy to extend.

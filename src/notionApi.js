const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_TOKEN });

async function fetchDatabase(databaseId) {
  const response = await notion.databases.query({ database_id: databaseId });
  return response.results;
}

async function fetchPage(pageId) {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
}

module.exports = {
  fetchDatabase,
  fetchPage,
};

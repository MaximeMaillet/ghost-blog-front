import GhostContentAPI from "@tryghost/content-api";

export default new GhostContentAPI({
  url: process.env.REACT_APP_API_URL,
  key: process.env.REACT_APP_API_KEY,
  version: 'v2'
});
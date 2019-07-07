import GhostContentAPI from "@tryghost/content-api";
import GhostAdminAPI from "@tryghost/admin-api";

export const apiContent = new GhostContentAPI({
  url: process.env.REACT_APP_API_URL,
  key: process.env.REACT_APP_API_KEY,
  version: 'v2'
});

export const apiAdmin = new GhostAdminAPI({
  url: process.env.REACT_APP_API_URL,
  key: process.env.REACT_APP_API_ADMIN_KEY,
  version: 'v2'
});

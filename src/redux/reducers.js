import postsReducer from './posts/reducers';
import settingsReducer from './settings/reducers';
import tagsReducer from './tags/reducer';

export default {
  posts: postsReducer,
  settings: settingsReducer,
  tags: tagsReducer,
};
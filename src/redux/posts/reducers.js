import {TYPE} from "./actions";
import {replaceURL} from '../../libraries/api';

const initialState = {
  loading: false,
  data: {},
};

const watchField = ['feature_image', 'twitter_image'];
function fetchAndReplace(posts) {
  Object.keys(posts).map((post) => {
    if(watchField.indexOf(post) !== -1) {
      posts[post] = posts[post] ? replaceURL(posts[post]) : posts[post];
    }
    return post;
  });

  return posts;
}

export default function(state = initialState, actions) {
  switch(actions.type) {
    case TYPE.START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TYPE.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case TYPE.FAIL_LOADING:
      return {
        ...state,
        error: actions.error,
      };
    case TYPE.SUCCESS_LOADING:
      if(actions.data) {
        if(actions.data.post) {
          actions.data.post = fetchAndReplace(actions.data.post);
        }
        if(actions.data.posts) {
          actions.data.posts.map((item) => {
            return fetchAndReplace(item);
          });
        }
      }
      return {
        ...state,
        loaded: true,
        data: actions.data,
      };
    default:
      return state;
  }
}
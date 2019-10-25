import {TYPE} from "./actions";
import {replaceURL} from '../../libraries/api';

const initialState = {
  loading: false,
  data: {},
};

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
      const watchField = ['feature_image', 'twitter_image'];
      if(actions.data) {
        if(actions.data.post) {
          Object.keys(actions.data.post).map((post) => {
            if(watchField.indexOf(post) !== -1) {
              actions.data.post[post] = replaceURL(actions.data.post[post]);
            }
            return post;
          });
        }
        if(actions.data.posts) {
          actions.data.posts.map((item) => {
            Object.keys(item).map((post) => {
              if(watchField.indexOf(post) !== -1) {
                item[post] = replaceURL(item[post]);
              }
              return post;
            });
            return item;
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
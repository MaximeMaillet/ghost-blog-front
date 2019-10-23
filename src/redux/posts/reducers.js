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
      const watchField = ['feature_image'];
      if(actions.data) {
        if(actions.data.post) {
          actions.data.post.feature_image = replaceURL(actions.data.post.feature_image);
        }
        if(actions.data.posts) {
          actions.data.posts.forEach((post) => {
            post.feature_image = replaceURL(post.feature_image)
            return post;
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
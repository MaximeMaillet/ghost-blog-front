import {TYPE} from "./actions";
import {fetchAndReplaceUrl, convertParagraph} from '../../libraries/text';

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
      const watchFields = ['feature_image', 'twitter_image'];
      if(actions.data) {
        if(actions.data.post) {
          actions.data.post = fetchAndReplaceUrl(watchFields, actions.data.post);
          actions.data.post.html = convertParagraph(actions.data.post.html);
        }
        if(actions.data.posts) {
          actions.data.posts.map((item) => {
            return fetchAndReplaceUrl(watchFields, item);
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
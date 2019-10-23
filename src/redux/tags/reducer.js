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
        if(actions.data.tag) {
          actions.data.tag.feature_image = replaceURL(actions.data.tag.feature_image);
        }
        if(actions.data.tags) {
          actions.data.tags.forEach((tag) => {
            tag.feature_image = replaceURL(tag.feature_image)
            return tag;
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
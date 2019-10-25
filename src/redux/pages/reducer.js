import {TYPE} from "./actions";
import {fetchAndReplaceUrl} from '../../libraries/api';

const initialState = {
  loading: false,
  loaded: false,
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
        actions.data = fetchAndReplaceUrl(
            ['feature_image', 'twitter_image'],
            actions.data,
        );
        actions.data.chapters = actions.data.html.split('<hr>');
      return {
        ...state,
        loaded: true,
        data: actions.data,
      };
    default:
      return state;
  }
}
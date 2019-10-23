import {TYPE} from "./actions";
import {replaceURL} from '../../libraries/api';

const initialState = {
  loading: false,
  data: null,
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
      if(actions.data) {
        const watchField = ['cover_image', 'logo'];
        Object.keys(actions.data).map((setting, index) => {
          if(watchField.indexOf(setting) !== -1) {
            actions.data[setting] = replaceURL(actions.data[setting]);
          }
        });
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
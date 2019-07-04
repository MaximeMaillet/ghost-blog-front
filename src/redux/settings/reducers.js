import {TYPE} from "./actions";

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
      return {
        ...state,
        loaded: true,
        data: actions.data,
      };
    default:
      return state;
  }
}
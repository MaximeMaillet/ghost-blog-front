import {apiContent} from '../../libraries/api';

export const TYPE = {
  START_LOADING: 'Settings/start_loading',
  STOP_LOADING: 'Settings/stop_loading',
  FAIL_LOADING: 'Settings/fail_loading',
  SUCCESS_LOADING: 'Settings/success_loading',
};

const startLoading = () => {
  return {
    type: TYPE.START_LOADING,
  }
};

const stopLoading = () => {
  return {
    type: TYPE.STOP_LOADING,
  }
};

const loadingFailed = (e) => {
  return {
    type: TYPE.FAIL_LOADING,
    error: e,
  }
};

const loadingSuccess = (data) => {
  return {
    type: TYPE.SUCCESS_LOADING,
    data,
  }
};

const load = () => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const response = await apiContent.settings.browse();
      dispatch(loadingSuccess(response));
    } catch(e) {
      dispatch(loadingFailed(e));
    } finally {
      dispatch(stopLoading());
    }
  }
};

export default {
  load,
}

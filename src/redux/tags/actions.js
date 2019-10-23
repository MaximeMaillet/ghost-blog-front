import {apiContent} from '../../libraries/api';
import {readingTime} from '@tryghost/helpers'

export const TYPE = {
  START_LOADING: 'Tags/start_loading',
  STOP_LOADING: 'Tags/stop_loading',
  FAIL_LOADING: 'Tags/fail_loading',
  SUCCESS_LOADING: 'Tags/success_loading',
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

const loadFromSlug = (slug) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const response = await apiContent.tags.read({slug});
      dispatch(loadingSuccess({
        tag: response,
      }));
    } catch(e) {
      dispatch(loadingFailed(e));
    } finally {
      dispatch(stopLoading());
    }
  }
};


export default {
  loadFromSlug,
}

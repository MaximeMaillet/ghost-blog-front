import {apiContent} from '../../libraries/api';
import {readingTime} from '@tryghost/helpers'

export const TYPE = {
  START_LOADING: 'Pages/start_loading',
  STOP_LOADING: 'Pages/stop_loading',
  FAIL_LOADING: 'Pages/fail_loading',
  SUCCESS_LOADING: 'Pages/success_loading',
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

const getReadingTime = (post) => {
  return readingTime(post, {minute: '1 minute', minutes: '% minutes'});
};

const loadFromSlug = (slug) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());

      const response = await apiContent.pages.read({slug, include:'authors'});
      dispatch(loadingSuccess({
        ...response,
        readingTime: getReadingTime(response),
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

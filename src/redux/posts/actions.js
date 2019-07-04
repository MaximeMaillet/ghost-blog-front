import api from '../../libraries/api';

export const TYPE = {
  START_LOADING: 'Posts/start_loading',
  STOP_LOADING: 'Posts/stop_loading',
  FAIL_LOADING: 'Posts/fail_loading',
  SUCCESS_LOADING: 'Posts/success_loading',
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

      const response = await api.posts.read({slug, include:'tags,authors'});
      dispatch(loadingSuccess({post: response}));
    } catch(e) {
      dispatch(loadingFailed(e));
    } finally {
      dispatch(stopLoading());
    }
  }
};

const load = (filter) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());

      const response = await api.posts.browse({include: 'tags,authors'});
      const pagination = response['meta']['pagination'];
      delete response['meta'];

      dispatch(loadingSuccess({
        posts: response,
        pagination,
      }));
    } catch(e) {
      dispatch(loadingFailed(e));
    } finally {
      dispatch(stopLoading());
    }
  }
};

export default {
  load,
  loadFromSlug,
}
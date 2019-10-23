import {apiContent} from '../../libraries/api';
import {readingTime} from '@tryghost/helpers'

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

const getReadingTime = (post) => {
  return readingTime(post, {minute: '1 minute', minutes: '% minutes'});
};

const loadFromSlug = (slug) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());

      const response = await apiContent.posts.read({slug, include:'authors'});
      dispatch(loadingSuccess({
        post: {
          ...response,
          readingTime: getReadingTime(response),
        }
      }));
    } catch(e) {
      dispatch(loadingFailed(e));
    } finally {
      dispatch(stopLoading());
    }
  }
};

const loadFromTag = (slug) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());

      const response = await apiContent.posts.browse({filter: `tag:${slug}`, include:'tags,authors'});
      dispatch(loadingSuccess({
        post: {
          ...response,
          readingTime: getReadingTime(response),
        }
      }));
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
      const filters = {include: 'tags,authors'};
      Object.assign(filters, filter);
      const response = await apiContent.posts.browse(filters);
      const pagination = response['meta']['pagination'];
      delete response['meta'];
      const posts = response.map((post) => {
        return {
          ...post,
          readingTime: getReadingTime(post),
        };
      });
      dispatch(loadingSuccess({
        posts,
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
  loadFromTag,
}

import React from 'react';
import {connect} from "react-redux";
import Loading from '../Components/Posts/Loading';
import actionsPosts from '../redux/posts/actions';

export default function withPosts(BaseComponent) {
  class PostsComponent extends React.PureComponent {
    componentDidMount() {
      if(!this.props.data.posts) {
        this.props.loadPosts({});
      }
    }

    render() {
      const {data, loading} = this.props;

      if(loading || !data.posts) {
        return <Loading />;
      }

      return <BaseComponent {...this.props} posts={data.posts} pagination={data.pagination} />;
    }
  }

  return connect(
    (state) => ({
      loading: state.posts.loading,
      data: state.posts.data,
    }),
    (dispatch) => ({
      loadPosts: (filter) => dispatch(actionsPosts.load(filter)),
    })
  )(PostsComponent);
}
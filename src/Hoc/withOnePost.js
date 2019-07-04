import React from 'react';
import {connect} from "react-redux";
import Loading from '../Components/Posts/Loading';
import actionsPosts from '../redux/posts/actions';
import {withRouter} from "react-router-dom";

export default function withOnePost(BaseComponent) {
  class PostsComponent extends React.PureComponent {
    componentDidMount() {
      if(!this.props.data.post) {
        this.props.loadPost(this.props.match.params.slug);
      }
    }

    render() {
      const {data, loading} = this.props;

      if(loading || !data.post) {
        return <Loading />;
      }

      return <BaseComponent {...data.post} />;
    }
  }

  return connect(
    (state) => ({
      loading: state.posts.loading,
      data: state.posts.data,
    }),
    (dispatch) => ({
      loadPost: (slug) => dispatch(actionsPosts.loadFromSlug(slug)),
    })
  )(withRouter(PostsComponent));
}
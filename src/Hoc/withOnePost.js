import React from 'react';
import {connect} from "react-redux";
import Loading from '../Components/Posts/Loading';
import actionsPosts from '../redux/posts/actions';
import {withRouter} from "react-router-dom";

export default function withOnePost(BaseComponent) {
  class PostsComponent extends React.PureComponent {
    componentDidMount() {
      this.props.loadPost(this.props.match.params.slug);
    }

    componentWillReceiveProps(nextProps, nextContext) {
      if(nextProps.match.params.slug !== this.props.match.params.slug) {
        this.props.loadPost(nextProps.match.params.slug);
      }
    }

    render() {
      const {data, loading} = this.props;

      if(loading || !data.post) {
        return <Loading />;
      }

      return <BaseComponent {...this.props} {...data.post} />;
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

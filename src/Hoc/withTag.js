import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import actionsTags from '../redux/tags/actions';

export default function withTag(BaseComponent) {
  class TagsComponent extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        tag: null,
      };
    }

    componentWillReceiveProps(nextProps, nextContext) {
      if(this.props.match.params.slug !== nextProps.match.params.slug) {
        this.props.loadTags(nextProps.match.params.slug);
      }
    }

    componentDidMount() {
      this.props.loadTags(this.props.match.params.slug);
    }

    render() {
      const {data, loading, loaded, error} = this.props;
      // Not ready
      if (!data) {
        return null;
      }

      // Loading
      if(!loaded && loading) {
        return null;
      }

      // No tag exists
      if(!data.tag || error) {
        return null;
      }

      return <BaseComponent {...this.props} tag={data.tag} postFilter={{filter: `tag:${data.tag.slug}`}} />;
    }
  }

  return withRouter(connect(
    (state) => ({
      loading: state.tags.loading,
      loaded: state.tags.loaded,
      data: state.tags.data,
      error: state.tags.error,
    }),
    (dispatch) => ({
      loadTags: (slug) => dispatch(actionsTags.loadFromSlug(slug)),
    })
  )(TagsComponent));
}

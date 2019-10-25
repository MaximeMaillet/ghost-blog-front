import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import actionsPages from '../redux/pages/actions';

export default function withPage(BaseComponent) {
  class PageComponent extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        chapter: 0,
        chaptersNumber: 0,
      };
    }

    componentWillReceiveProps(nextProps, nextContext) {
      if(nextProps.match.params) {
        if(nextProps.match.params.chapter) {
          if(nextProps.match.params.chapter !== this.state.chapter) {
            this.setState({chapter: parseInt(nextProps.match.params.chapter)});
          }
        } else {
          this.setState({chapter: 1});
        }
      }

      if(nextProps.data && nextProps.data.chapters && nextProps.data.chapters.length !== this.state.chaptersNumber) {
        this.setState({chaptersNumber: nextProps.data.chapters.length});
      }

      if (nextProps.match.params.slug !== this.props.match.params.slug) {
        this.props.loadFromSlug(this.props.match.params.slug);
      }
    }

    componentDidMount() {
      this.props.loadFromSlug(this.props.match.params.slug);
    }

    render() {
      const {data, loading, loaded} = this.props;
      const {chapter, chaptersNumber} = this.state;

      if(loading || !loaded) {
        return null;
      }

      if(chapter === 0 || chapter > data.chapters.length) {
        return <BaseComponent page={data} chapterNotFound={true} />;
      }

      return <BaseComponent {...this.props} 
        page={data}
        chaptersNumber={chaptersNumber}
        chapter={chapter} 
      />;
    }
  }

  return withRouter(connect(
    (state) => ({
      loading: state.pages.loading,
      loaded: state.pages.loaded,
      data: state.pages.data,
    }),
    (dispatch) => ({
      loadFromSlug: (slug) => dispatch(actionsPages.loadFromSlug(slug)),
    })
  )(PageComponent));
}

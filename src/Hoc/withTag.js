import React from 'react';
import {apiContent} from '../libraries/api';
import {withRouter} from "react-router-dom";

export default function withTag(BaseComponent) {
  class TagsComponent extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        tag: null,
      };
    }

    componentWillReceiveProps(nextProps, nextContext) {
      this.loadTags(nextProps.match.params.slug);
    }

    componentDidMount() {
      this.loadTags(this.props.match.params.slug);
    }

    loadTags = async(slug) => {
      try {
          const tag = await apiContent.tags.read({slug});
          delete tag['meta'];
          this.setState({tag});
      } catch(e) {
        console.warn(e);
      }
    };

    render() {
      if (!this.state.tag) {
        return null;
      }

      return <BaseComponent {...this.props} tag={this.state.tag} />;
    }
  }

  return withRouter(TagsComponent);
}

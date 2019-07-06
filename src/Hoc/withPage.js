import React from 'react';
import api from '../libraries/api';
import {withRouter} from "react-router-dom";

export default function withPage(BaseComponent) {
  class PageComponent extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        page: null,
      };
    }

    componentWillReceiveProps(nextProps, nextContext) {
      if (nextProps.match.params.slug !== this.props.match.params.slug) {
        this.loadPage(nextProps.match.params.slug);
      }
    }

    componentDidMount() {
      this.loadPage(this.props.match.params.slug);
    }

    formatHtml = (html) => {
      html = html.replace('<hr>', '</div><div class="chapter post-content">');
      html = html.replace('* * *', '<hr>');
      return `<div class="chapter post-content">${html}</div>`
    };

    loadPage = async(slug) => {
      try {
        const page = await api.pages.read({slug, include:'authors'});
        delete page['meta'];
        page.html = this.formatHtml(page.html);
        this.setState({page});
      } catch(e) {
        console.warn(e);
      }
    };

    render() {
      if (!this.state.page) {
        return null;
      }

      return <BaseComponent {...this.props} page={this.state.page} />;
    }
  }

  return withRouter(PageComponent);
}

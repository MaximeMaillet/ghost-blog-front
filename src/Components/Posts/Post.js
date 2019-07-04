import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Authors from "../Authors/Authors";

import './posts.scss'
import Date from "../Date/Date";

export class Post extends Component {

  static propTypes = {
    published_at: PropTypes.string,
    title: PropTypes.string,
    html: PropTypes.string,
    feature_image: PropTypes.string,
    authors: PropTypes.array,
    tags: PropTypes.array,
  };

  static defaultProps = {
    published_at: moment().format(),
    authors: [],
    tags: [],
  };

  render() {
    return (
      <article className={`post ${this.props.className}`}>
        <div className="header">
          <div className="date"><Date date={this.props.published_at} /></div>
          <Authors className="authors" authors={this.props.authors} />
        </div>
        <h1 className="title">{this.props.title}</h1>
        <div className="body" dangerouslySetInnerHTML={{__html: this.props.html}} />
      </article>
    );
  }
}

export default Post;
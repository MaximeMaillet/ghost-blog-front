import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Authors from "../Authors/Authors";

export default class Excerpt extends Component {

  static propTypes = {
    title: PropTypes.string,
    custom_excerpt: PropTypes.string,
    slug: PropTypes.string,
    published_at: PropTypes.string,
    authors: PropTypes.array,
  };

  static defaultProps = {
    custom_excerpt: [],
    authors: [],
  };

  render() {
    return (
      <Link to={`/posts/${this.props.slug}`}>
        <div className="post-excerpt">
          <div className="image"></div>
          <div className="title">{this.props.title}</div>
          <Authors authors={this.props.authors} />
          <div className="excerpt">
            {this.props.custom_excerpt}
          </div>
        </div>
      </Link>
    );
  }
}
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Authors from "../Authors/Authors";

import './posts.scss';
import Date from "../Date/Date";

export default class Excerpt extends Component {

  static propTypes = {
    title: PropTypes.string,
    feature_image: PropTypes.string,
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
      <article className="post-excerpt">
        <div className="image">
          <Link to={`/posts/${this.props.slug}`}>
            <img src={this.props.feature_image} alt="illustration" />
          </Link>
        </div>
        <div className="text">
          <div className="date"><Date date={this.props.published_at}/></div>
          <Link to={`/posts/${this.props.slug}`}>
            <h2 className="title">{this.props.title}</h2>
          </Link>
          <Authors
            className="authors"
            authors={this.props.authors}
          />
          <Link to={`/posts/${this.props.slug}`}>
            <div className="excerpt">
              {this.props.custom_excerpt}
            </div>
          </Link>
        </div>
      </article>
    );
  }
}
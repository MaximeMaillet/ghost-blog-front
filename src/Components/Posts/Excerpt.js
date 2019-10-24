import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Authors from "../Authors/Authors";

import './posts.scss';
import Date from "../Date/Date";
import ReadingTime from "../ReadingTime/ReadingTime";

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
      <article className="post-excerpt row row-eq-height">
        <div className="image col-12 col-sm-12 col-md-4 col-lg-4">
          <Link to={`/histoires/${this.props.slug}`} style={{
            backgroundImage: `url('${this.props.feature_image}')`,
          }}></Link>
        </div>
        <div className="text col-12 col-sm-12 col-md-8 col-lg-8">
          <div className="credits">
            <div className="date"><Date date={this.props.published_at}/></div>
            <Authors
              className="authors"
              authors={this.props.authors}
            />
          </div>
          <div className="body">
            <Link to={`/histoires/${this.props.slug}`}>
              <h2 className="title">{this.props.title}</h2>
            </Link>
            <Link to={`/histoires/${this.props.slug}`}>
              <div className="excerpt post-content">
                {this.props.custom_excerpt}
              </div>
            </Link>
          </div>
          <div className="footer">
            <ReadingTime readingTime={this.props.readingTime} />
          </div>
        </div>
      </article>
    );
  }
}

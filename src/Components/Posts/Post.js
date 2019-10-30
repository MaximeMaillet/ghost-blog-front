import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Authors from "../Authors/Authors";
import './posts.scss'
import Date from "../Date/Date";
import ReadingTime from "../ReadingTime/ReadingTime";
import Comment from "../Comment/Comment";

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
    console.log(this.props);
    return (
      <article className={`post ${this.props.className}`}>
        <div className="post-header">
          <h1 className="post-title">{this.props.title}</h1>
          <div className="post-data">
            <ReadingTime readingTime={this.props.readingTime} />
            <div className="post-date">
              <div className="date"><Date date={this.props.published_at} /></div>
              <Authors className="authors" authors={this.props.authors} />
            </div>
          </div>
        </div>
        <div className="post-body post-content" dangerouslySetInnerHTML={{__html: this.props.html}} />
        {this.props.trailer && <div className="post-footer">
          <h3>Trailer :</h3>
          <figure dangerouslySetInnerHTML={{__html: this.props.trailer}}></figure>
        </div>}
        <div className="post-comment">
          <Comment />
        </div>
      </article>
    );
  }
}

export default Post;

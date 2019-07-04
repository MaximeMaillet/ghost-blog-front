import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import withOnePost from "../../Hoc/withOnePost";
import Authors from "../Authors/Authors";

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
    console.log(this.props)
    return (
      <div className="post">
        <div className="header">
          <div className="title">{this.props.title}</div>
          <Authors authors={this.props.authors} />
          <div className="date">{this.props.published_at}</div>
        </div>
        <div className="body" dangerouslySetInnerHTML={{__html: this.props.html}} />
      </div>
    );
  }
}

export default withOnePost(Post);
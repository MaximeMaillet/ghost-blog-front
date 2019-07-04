import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Excerpt from "./Excerpt";

export default class List extends Component {

  static propTypes = {
    posts: PropTypes.array,
  };

  static defaultProps = {
    posts: [],
  };

  render() {
    return (
      <div className="post-list">
        {this.props.posts.map((item, index) => {
          // return item.title;
          return <Excerpt {...item} key={index} />;
        })}
      </div>
    );
  }
}

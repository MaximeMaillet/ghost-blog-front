import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Excerpt from "./Excerpt";

import './posts.scss';
import withPosts from "../../Hoc/withPosts";

class List extends Component {

  static propTypes = {
    posts: PropTypes.array,
    pagination: PropTypes.object,
  };

  static defaultProps = {
    posts: [],
    pagination: {},
  };

  render() {
    return (
      <div className={`post-list d-flex flex-column ${this.props.className}`}>
        {this.props.posts.map((item, index) => {
          return <Excerpt {...item} key={index} />;
        })}
      </div>
    );
  }
}

export default withPosts(List);
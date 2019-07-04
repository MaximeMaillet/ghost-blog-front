import React, {Component} from 'react';
import OnePost from '../Components/Posts/Post';

export class Post extends Component {
  render() {
    return (
      <div className="home">
        <OnePost />
      </div>
    );
  }
}

export default Post;
import React, {Component} from 'react';
import OnePost from '../Components/Posts/Post';
import SplashHeader from "../Components/Headers/SplashHeaders/SplashHeader";
import withOnePost from "../Hoc/withOnePost";

export class Post extends Component {
  render() {
    console.log('ou');
    console.log(this.props);
    return (
      <div className="container-fluid p-0 container-post">
        <SplashHeader showTitles={false} splash={this.props.feature_image} />
        <div className="container">
          <OnePost {...this.props} className="overlap-top-40" />
        </div>
      </div>
    );
  }
}

export default withOnePost(Post);
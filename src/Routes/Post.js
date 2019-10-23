import React, {Component} from 'react';
import OnePost from '../Components/Posts/Post';
import withOnePost from "../Hoc/withOnePost";
import TopHeader from "../Components/Headers/TopHeader/TopHeader";
import BackgroundImage from "../Components/BackgroundImage/BackgroundImage";
import Footer from "../Components/Footer/Footer";
import Comment from "../Components/Comment/Comment";

export class Post extends Component {
  componentWillReceiveProps(nextProps, nextContext) {
    document.title = nextProps.title;
  }

  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    return (
      <div className="container-fluid p-0 container-post">
        <TopHeader />
        <BackgroundImage
          showTitles={false}
          splash={this.props.feature_image}
        />
        <div className="container">
          <OnePost {...this.props} className="overlap-top" />
          <Comment />
        </div>
        <Footer
          image={this.props.feature_image}
        />
      </div>
    );
  }
}

export default withOnePost(Post);
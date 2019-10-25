import React, {Component} from 'react';
import OnePost from '../Components/Posts/Post';
import withOnePost from "../Hoc/withOnePost";
import TopHeader from "../Components/Headers/TopHeader/TopHeader";
import BackgroundImage from "../Components/BackgroundImage/BackgroundImage";
import Footer from "../Components/Footer/Footer";
import Comment from "../Components/Comment/Comment";
import {Helmet} from "react-helmet";

export class Post extends Component {
  render() {
    return (
      <div className="container-fluid p-0 container-post">
        <Helmet>
          <title>{this.props.title}</title>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@DeuxMaxfr" />
          <meta property="og:type" content="article" />
          <meta name="twitter:creator" content={this.props.primary_author.twitter ? this.props.primary_author.twitter : '@DeuxMaxfr'} />
          <meta property="og:url" content={this.props.url} />
          <meta property="og:title" content={this.props.twitter_title} />
          <meta property="og:description" content={this.props.twitter_description} />
          <meta property="og:image" content={this.props.twitter_image} />
        </Helmet>
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
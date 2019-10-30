import React, {Component} from 'react';
import List from "../Components/Posts/List";
import BackgroundImage from "../Components/BackgroundImage/BackgroundImage";
import withSettings from "../Hoc/withSettings";
import Footer from "../Components/Footer/Footer";
import withPosts from "../Hoc/withPosts";
import {Helmet} from "react-helmet";

export class Home extends Component {
  render() {
    return (
      <div className="container-home">
        <Helmet>
          <title>{this.props.meta_title}</title>
          <meta name="description" content={this.props.meta_description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@DeuxMaxfr" />
          <meta property="og:type" content="article" />
          <meta name="twitter:creator" content={this.props.twitter ? this.props.twitter : '@DeuxMaxfr'} />
          <meta property="og:url" content={this.props.url} />
          <meta property="og:title" content={this.props.twitter_title} />
          <meta property="og:description" content={this.props.twitter_description} />
          <meta property="og:image" content={this.props.cover_image} />
        </Helmet>
        <BackgroundImage
          splash={this.props.cover_image}
          description={this.props.description}
          title={this.props.title}
          logo={this.props.logo}
          showLogo={true}
        />
        <div className="container overlap-top">
          <List
            posts={this.props.posts}
            pagination={this.props.pagination}
          />
        </div>
        <Footer
          image={this.props.cover_image}
        />
      </div>
    );
  }
}

export default withSettings(withPosts(Home));
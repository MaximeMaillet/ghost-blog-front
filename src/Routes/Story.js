import React, {Component} from 'react';
import TopHeader from "../Components/Headers/TopHeader/TopHeader";
import BackgroundImage from "../Components/BackgroundImage/BackgroundImage";
import Footer from "../Components/Footer/Footer";
import withTag from "../Hoc/withTag";
import List from "../Components/Posts/List";
import withPosts from '../Hoc/withPosts';
import {Helmet} from "react-helmet";

export class Story extends Component {
  render() {
    const {tag} = this.props;
    return (
      <div className="container-fluid p-0 container-post">
        <Helmet>
          <title>{tag.meta_title}</title>
          <meta name="description" content={tag.meta_description} />
          <meta name="google" content="notranslate" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@DeuxMaxfr" />
          <meta property="og:type" content="article" />
          <meta name="twitter:creator" content="@DeuxMaxfr" />
          <meta property="og:url" content={tag.url} />
          <meta property="og:title" content={tag.meta_title} />
          <meta property="og:description" content={tag.meta_description} />
          <meta property="og:image" content={tag.feature_image} />
        </Helmet>
        <TopHeader />
        <BackgroundImage
          title={tag.name}
          description={tag.description}
          splash={tag.feature_image}
        />
        <div className="container overlap-top">
          <List posts={this.props.posts} />
        </div>
        <Footer
          image={tag.feature_image}
        />
      </div>
    );
  }
}

export default withTag(withPosts(Story));

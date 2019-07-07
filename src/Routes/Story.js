import React, {Component} from 'react';
import TopHeader from "../Components/Headers/TopHeader/TopHeader";
import BackgroundImage from "../Components/BackgroundImage/BackgroundImage";
import Footer from "../Components/Footer/Footer";
import withTag from "../Hoc/withTag";
import {apiContent} from '../libraries/api';
import List from "../Components/Posts/List";

export class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  };

  componentDidMount() {
    document.title = this.props.tag ? this.props.tag.name : 'Histoire';
    this.loadPosts(this.props.tag.slug);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    document.title = nextProps.tag.name;
    this.loadPosts(nextProps.tag.slug);
  }

  loadPosts = async(tagSlug) => {
    try {
      const posts = await apiContent.posts.browse({filter: `tag:${tagSlug}`, include:'tags,authors'});
      delete posts['meta'];
      this.setState({posts});
    } catch(e) {
      console.warn(e);
    }
  };

  render() {
    const {tag} = this.props;

    return (
      <div className="container-fluid p-0 container-post">
        <TopHeader />
        <BackgroundImage
          title={tag.name}
          description={tag.description}
          splash={tag.feature_image}
        />
        <div className="container resp-overlap-top-20">
          <List posts={this.state.posts} />
        </div>
        <Footer
          image={tag.feature_image}
        />
      </div>
    );
  }
}

export default withTag(Story);

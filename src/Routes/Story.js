import React, {Component} from 'react';
import TopHeader from "../Components/Headers/TopHeader/TopHeader";
import BackgroundImage from "../Components/BackgroundImage/BackgroundImage";
import Footer from "../Components/Footer/Footer";
import withTag from "../Hoc/withTag";
import List from "../Components/Posts/List";
import withPosts from '../Hoc/withPosts';

export class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  };

  componentDidMount() {
    document.title = this.props.tag ? this.props.tag.name : 'Histoire';
  }

  componentWillReceiveProps(nextProps, nextContext) {
    document.title = nextProps.tag.name;
  }

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

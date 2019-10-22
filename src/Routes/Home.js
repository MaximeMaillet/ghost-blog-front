import React, {Component} from 'react';
import List from "../Components/Posts/List";
import BackgroundImage from "../Components/BackgroundImage/BackgroundImage";
import withSettings from "../Hoc/withSettings";
import Footer from "../Components/Footer/Footer";
import withPosts from "../Hoc/withPosts";

export class Home extends Component {
  componentDidMount() {
    document.title = 'Blog';
  }

  componentWillReceiveProps(nextProps, nextContext) {
    document.title = nextProps.title;
  }

  render() {
    return (
      <div className="container-home">
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
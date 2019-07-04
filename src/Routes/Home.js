import React, {Component} from 'react';
import withPosts from "../Hoc/withPosts";
import List from "../Components/Posts/List";
import SplashHeader from "../Components/Headers/SplashHeaders/SplashHeader";

export class Home extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="container-fluid p-0 container-home">
        <SplashHeader />
        <div className="container">
          <List
            className="overlap-top-20"
            posts={this.props.posts}
            pagination={this.props.pagination}
          />
        </div>
      </div>
    );
  }
}

export default withPosts(Home);
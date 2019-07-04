import React, {Component} from 'react';
import withPosts from "../Hoc/withPosts";
import List from "../Components/Posts/List";

export class Home extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="home">
        Home
        <List posts={this.props.posts} pagination={this.props.pagination} />
      </div>
    );
  }
}

export default withPosts(Home);
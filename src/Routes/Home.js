import React, {Component} from 'react';
import withPosts from "../Hoc/withPosts";
import List from "../Components/Posts/List";
import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'http://localhost:8083',
  key: 'db900af159030c5305e5b2c290',
  version: 'v2'
});

export class Home extends Component {
  componentDidMount() {
    api.settings.browse()
      .then((da) => {
        console.log(da);
      })
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
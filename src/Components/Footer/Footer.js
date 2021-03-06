import React, {Component} from 'react';
import {apiContent} from '../../libraries/api';

import './footer.scss';
import {Link} from "react-router-dom";
import withSettings from "../../Hoc/withSettings";
import Subscribers from "../Subscribers/Subscribers";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      posts: [],
      pages: [],
    };
  }

  componentDidMount() {
    this.load();
  }

  load = async() => {
    try {
      const tags = await apiContent.tags.browse();
      delete tags['meta'];

      const posts = await apiContent.posts.browse({limit: 5});
      delete posts['meta'];

      const pages = await apiContent.pages.browse({limit: 5});
      delete pages['meta'];

      this.setState({
        tags,
        posts,
        pages,
      })
    } catch(e) {

    }
  };

  render() {
    return (
      <footer className="footer" style={{
        backgroundImage: `url('${this.props.image}')`,
      }}>
        <div className="container-fluid d-flex align-items-center justify-content-center footer-content">
          <div className="container row">
            <div className="col-12 subscribers">
              <Subscribers />
            </div>
            <div className="col-12 col-lg-4 about">
              {this.props.ghost_foot}
            </div>
            <div className="col-12 col-lg-8 d-flex links">
              <div className="part posts">
                <h4>Histoires</h4>
                <div className="d-flex flex-column">
                  {this.state.posts.map((tag, index) => {
                    return <Link key={index} to={`/histoires/${tag.slug}`}>{tag.title}</Link>;
                  })}
                </div>
              </div>
              <div className="part tags">
                <h4>Recueils</h4>
                <div className="d-flex flex-column">
                  {this.state.tags.map((tag, index) => {
                    return <Link key={index} to={`/recueils/${tag.slug}`}>{tag.name}</Link>;
                  })}
                </div>
              </div>
              {this.state.pages.length > 0 &&
                <div className="part novel">
                  <h4>Romans</h4>
                  <div className="d-flex flex-column">
                    {this.state.pages.map((page, index) => {
                      return <Link key={index} to={`/romans/${page.slug}`}>{page.title}</Link>;
                    })}
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withSettings(Footer);

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withSettings from "../../../Hoc/withSettings";

import './top_header.scss';
import {Link} from "react-router-dom";

class TopHeader extends Component {

  static propTypes = {
    logo: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  };

  static defaultProps = {
  };

  render() {
    return (
      <header className="top-header d-flex flex-row">
        <Link to="/" className="logo">
          <img src={this.props.logo} alt={this.props.title} />
        </Link>
        <div className="titles d-flex flex-column align-items-start">
          <h2>{this.props.title}</h2>
          <h3>{this.props.description}</h3>
        </div>
      </header>
    );
  }
}

export default withSettings(TopHeader);
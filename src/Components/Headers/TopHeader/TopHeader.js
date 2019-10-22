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
    title: 'DeuxMax',
    description: 'Histoires et compte de faits.'
  };

  render() {
    return (
      <header className="top-header d-flex flex-row">
        <Link to="/" className="logo">
          <img src={this.props.logo} alt={this.props.title} />
        </Link>
        <nav className="m-auto self-align-center">
          <Link to="/">
            Accueil
          </Link>
          /
          <Link to="/about">
            À propos
          </Link>
        </nav>
      </header>
    );
  }
}

export default withSettings(TopHeader);
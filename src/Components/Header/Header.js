import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withSettings from "../../Hoc/withSettings";

import './header.scss';

export class Header extends Component {

  static propTypes = {
    logo: PropTypes.string,
    cover_image: PropTypes.string,
  };

  render() {
    return (
      <header className="main-header">

      </header>
    );
  }
}

export default withSettings(Header);
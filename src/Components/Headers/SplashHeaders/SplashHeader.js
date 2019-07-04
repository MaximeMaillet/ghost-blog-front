import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withSettings from "../../../Hoc/withSettings";

import './splash_header.scss';

export class SplashHeader extends Component {

  static propTypes = {
    logo: PropTypes.string,
    cover_image: PropTypes.string,
    title: PropTypes.string,
    splash: PropTypes.string,
    showTitles: PropTypes.bool,
  };

  static defaultProps = {
    showTitles: true,
  };

  render() {
    console.log(this.props);
    return (
      <header className="splash-header d-flex flex-column align-items-center justify-content-center" style={{
        backgroundImage: `url('${this.props.splash ? this.props.splash : this.props.cover_image}')`,
      }}>
        {this.props.showTitles && <h1>{this.props.title}</h1>}
        {this.props.showTitles && <h3 className="description">{this.props.description}</h3>}
      </header>
    );
  }
}

export default withSettings(SplashHeader);
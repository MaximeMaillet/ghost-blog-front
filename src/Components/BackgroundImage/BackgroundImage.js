import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './background_image.scss';

export default class BackgroundImage extends Component {

  static propTypes = {
    cover_image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    splash: PropTypes.string,
    showTitles: PropTypes.bool,
  };

  static defaultProps = {
    showTitles: true,
  };

  render() {
    return (
      <div className="background-image d-flex flex-column align-items-center justify-content-center" style={{
        backgroundImage: `url('${this.props.splash ? this.props.splash : this.props.cover_image}')`,
      }}>
        {this.props.showTitles &&
        <div className="titles">
          <h1>{this.props.title}</h1>
          <h3 className="description">{this.props.description}</h3>
        </div>}
      </div>
    );
  }
}
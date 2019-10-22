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
    showLogo: PropTypes.bool,
  };

  static defaultProps = {
    showTitles: true,
    showLogo: false,
  };

  render() {
    return (
      <div className="background-image d-flex flex-column align-items-center justify-content-center" style={{
        backgroundImage: `url('${this.props.splash ? this.props.splash : this.props.cover_image}')`,
      }}>
        {(this.props.showTitles || this.props.showLogo) &&
          <div className="container h-100 overlap-bottom">
            <div className="d-flex h-100 home-splash">
              {this.props.showLogo && 
                <div className="logo"><img src={this.props.logo} alt={this.props.title} /></div>
              }
              {this.props.showTitles &&
                <div className="titles">
                  <h1>{this.props.title}</h1>
                  <h3 className="description">{this.props.description}</h3>
                </div>
              }
            </div>
          </div>}
      </div>
    );
  }
}

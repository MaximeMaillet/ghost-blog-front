import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './footer.scss';

export default class Footer extends Component {

  static propTypes = {
    image: PropTypes.string,
  };

  static defaultProps = {

  };

  render() {
    return (
      <footer className="footer d-flex flex-column align-items-center justify-content-center" style={{
        backgroundImage: `url('${this.props.image}')`,
      }}>
      </footer>
    );
  }
}
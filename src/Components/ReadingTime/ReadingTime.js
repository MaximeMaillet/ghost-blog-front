import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";

import './reading_time.scss'

class ReadingTime extends Component {
  static propTypes = {
    readingTime: PropTypes.string,
  };

  static defaultProps = {
    readingTime: '1 minute',
  };

  render() {
    return (
      <div className="reading-time">
        <FontAwesomeIcon icon={faClock} size="2x" /> <span className="reading-time-text">{this.props.readingTime}</span>
      </div>
    );
  }
}

export default ReadingTime;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class Date extends Component {
  static propTypes = {
    date: PropTypes.string,
  };

  render() {
    return moment(this.props.date).format('DD/MM/YYYY');
  }
}
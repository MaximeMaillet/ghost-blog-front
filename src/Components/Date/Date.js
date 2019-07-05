import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import localization from 'moment/locale/fr'

export default class Date extends Component {
  static propTypes = {
    date: PropTypes.string,
  };

  render() {
    moment.locale('fr', localization);
    return moment(this.props.date).format('LL');
  }
}
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import localization from 'moment/locale/fr'

export default class Date extends Component {
  static propTypes = {
    date: PropTypes.string,
  };

  render() {
    const date = moment(this.props.date);
    moment.locale('fr', localization);
    console.log(moment(1316116057189).fromNow());
    return date.format('LL');
  }
}
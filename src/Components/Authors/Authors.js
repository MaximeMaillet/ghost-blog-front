import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Authors extends Component {

  static propTypes = {
    authors: PropTypes.array,
  };

  static defaultProps = {
    authors: [],
  };

  render() {
    return (
      <div className={this.props.className}>{
        `Écrit par ${this.props.authors.map((author) => {
          return author.name;
        })}`
      }</div>
    );
  }
}

export default Authors;
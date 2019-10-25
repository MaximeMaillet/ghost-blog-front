import React, {Component} from 'react';

import './posts.scss';

export default class LoadingList extends Component {

  static propTypes = {
  };

  static defaultProps = {
  };

  render() {
    return (
      <div className={`post-list-loading ${this.props.className}`}>
        <div className="spinner-border" style={{
          width: '3rem',
          height: '3rem',
        }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}

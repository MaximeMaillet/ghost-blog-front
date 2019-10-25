import React, {Component} from 'react';
import LoadingIcon from '../../styles/loading.svg';
import TopHeader from '../Headers/TopHeader/TopHeader';

export default class Loading extends Component {
  render() {
    return (
      <div className="container-fluid p-0 container-post">
        <TopHeader />
        <div className="container">
          <div className="post-loading d-flex align-items-center justify-content-center">
            <img src={LoadingIcon} />
          </div>
        </div>
      </div>
    );
  }
}

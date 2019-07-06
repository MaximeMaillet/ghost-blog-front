import React, {Component} from 'react';
import './pages.scss'

class OnePage extends Component {
  render() {
    const {page} = this.props;
    return (
      <div className={`page ${this.props.className}`}>
        <div dangerouslySetInnerHTML={{__html: page.html}} />
        {page.featured &&
          <div className="chapter">
            <h1>Chapitre à suivre</h1>
            <h3>...</h3>
          </div>
        }
      </div>
    );
  }
}

export default OnePage;

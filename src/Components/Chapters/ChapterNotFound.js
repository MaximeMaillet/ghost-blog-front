import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './chapter.scss'

class ChapterNotFound extends Component {
  render() {
    const { slug} = this.props;
    return (
      <div className={`chapter ${this.props.className}`}>
        <div className="post-content">
            <h2>Ce chapitre n'existe pas</h2>
            <p className="text-center">
                <Link to={`/romans/${slug}`} className="btn btn-secondary text-white">Retour</Link>
            </p>
        </div>
      </div>
    );
  }
}

export default ChapterNotFound;

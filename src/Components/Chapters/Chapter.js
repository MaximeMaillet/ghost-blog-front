import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import './chapter.scss'
import downSvg from '../../styles/down.svg';

class Chapter extends Component {

  read = () => {
    const {slug, chapter} = this.props.match.params;
    localStorage.setItem(`${slug}-${chapter}`, 1);
    this.forceUpdate();
  }

  cancelRead = () => {
    const {slug, chapter} = this.props.match.params;
    localStorage.setItem(`${slug}-${chapter}`, 0);
    this.forceUpdate();
  }

  hasRead = () => {
    const {slug, chapter} = this.props.match.params;
    return localStorage.getItem(`${slug}-${chapter}`) === '1';
  }

  toBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  }

  componentWillReceiveProps(nextProps) {
    window.scrollTo(0, 0);
  }

  render() {
    const {content} = this.props;
    return (
      <div className={`chapter ${this.props.className} ${this.hasRead ? 'has-read' : ''}`}>
        {this.hasRead() ? <div className="font-italic text-right">Vous avez déjà lu ce chapitre <a href="#" onClick={this.cancelRead}>Annuler</a></div> : ''}
        <div
            className="post-content"
            dangerouslySetInnerHTML={{__html: content.replace('* * *', '<hr>')}} 
        />
        <div className="fixed-bottom">
          {!this.hasRead() && <button className="btn btn-secondary" onClick={this.read}>
              J'ai lu !
          </button>}
          <button className="btn btn-secondary" onClick={this.toBottom}><img src={downSvg} alt="down" width="20" /></button>
        </div>
      </div>
    );
  }
}

export default withRouter(Chapter);

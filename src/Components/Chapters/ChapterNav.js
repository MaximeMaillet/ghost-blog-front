import React, {Component} from 'react';
import {withRouter, Link} from "react-router-dom";
import './chapter.scss'

class ChapterNav extends Component {
  constructor(props) {
    super(props);
    this.chapters = [];
  }

  getNext = () => {
    let nextChapter = this.props.current+1;
    return `/romans/${this.props.slug}/chapitre-${nextChapter}`;
  }

  getPrev = () => {
    let prevChapter = this.props.current-1;
    return `/romans/${this.props.slug}/chapitre-${prevChapter}`;
  }

  componentWillReceiveProps(nextProps) {
    this.findChapters(nextProps);
  }

  componentWillMount() {
    this.findChapters(this.props);
  }

  findChapters = (props) => {
    const {total, current} = props;
    this.chapters = [];
    let arrayInit, arrayTotal = 0;
    if(total > 8) {
      arrayInit = current-3 < 1 ? 1 : current-3;
      arrayTotal = current+3 > total ? total : current+3;
      if(arrayInit >= 2) {
        this.chapters.push(1);
        if(arrayInit >= 3) {
          this.chapters.push('...');
        }
      }
      for(let i = arrayInit; i<=arrayTotal; i++) {
        this.chapters.push(i);
      }
      if(arrayTotal <= total-2) {
        this.chapters.push('...'); 
      }
      if(arrayTotal < total) {
        this.chapters.push(total); 
      }
    } else {
      for(let i=1; i<=total; i++) {
        this.chapters.push(i);
      }
    }
  }

  render() {
    const {current, total} = this.props;
    return (
      <nav className={`chapter-nav ${this.props.className}`}>
        <div className="links d-flex">
          <Link className={`btn ${current === 1 ? 'disabled': ''}`} to={this.getPrev()}>Précédent</Link>
          <div className="chapter-title">
            Chapitre :&nbsp;
            {this.chapters.map((item, index) => {
              if(item !== '...') {
                if(item === current) {
                  return <Link className="chap-number" to={"/"} key={index}><strong>{item}</strong></Link>;
                } else {
                  return <Link className="chap-number" to={"/"} key={index}>{item}</Link>;
                }
              }
              else
                return <div className="chap-number" key={index}>...</div>;
            })}
            </div>
          <Link className={`btn ml-auto ${current === total ? 'disabled': ''}`} to={this.getNext()}>Suivant</Link>
        </div>
      </nav>
    );
  }
}

export default withRouter(ChapterNav);

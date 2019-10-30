import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './comment.scss';

export default class Comment extends Component {
  static propTypes = {
    date: PropTypes.string,
  };

  componentDidMount() {
    document.title = this.props.title ? this.props.title : 'Article';
    (function() {
        var talk = document.createElement('script'); talk.type = 'text/javascript'; talk.async = true;
        var url = process.env.REACT_APP_TALK_URL;
        talk.src = '//' + url + '/assets/js/embed.js';
        talk.onload = function() {
            window.Coral.createStreamEmbed({
                id: "coral_thread",
                autoRender: true,
                rootURL: '//' + url,
            });
        };
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(talk);
    })();
  }

  render() {
    return (
        <div className={`comment ${this.props.className}`}>
            <div id="coral_thread"></div>
        </div>
    );
  }
}
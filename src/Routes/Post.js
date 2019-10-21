import React, {Component} from 'react';
import OnePost from '../Components/Posts/Post';
import withOnePost from "../Hoc/withOnePost";
import TopHeader from "../Components/Headers/TopHeader/TopHeader";
import BackgroundImage from "../Components/BackgroundImage/BackgroundImage";
import Footer from "../Components/Footer/Footer";

export class Post extends Component {
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

  componentWillReceiveProps(nextProps, nextContext) {
    document.title = nextProps.title;
  }

  render() {
    return (
      <div className="container-fluid p-0 container-post">
        <TopHeader />
        <BackgroundImage
          showTitles={false}
          splash={this.props.feature_image}
        />
        <div className="container">
          <OnePost {...this.props} className="resp-overlap-top-40" />
        </div>
        <div id="coral_thread"></div>
        <Footer
          image={this.props.feature_image}
        />
      </div>
    );
  }
}

export default withOnePost(Post);
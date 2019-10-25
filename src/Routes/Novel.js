import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TopHeader from "../Components/Headers/TopHeader/TopHeader";
import BackgroundImage from "../Components/BackgroundImage/BackgroundImage";
import Footer from "../Components/Footer/Footer";
import withPage from "../Hoc/withPage";
import Chapter from "../Components/Chapters/Chapter";
import ChapterNav from "../Components/Chapters/ChapterNav";
import ChapterNotFound from '../Components/Chapters/ChapterNotFound';

export class Novel extends Component {
  static propTypes = {
    chapterNotFound: PropTypes.bool,
  };

  static defaultProps = {
    chapterNotFound: false,
  };

  render() {
    const {page, chapter, chaptersNumber, chapterNotFound} = this.props;
    return (
      <div className="container-fluid p-0 container-post">
        <TopHeader />
        <BackgroundImage
          title={page.title}
          description="Roman"
          splash={page.feature_image}
        />
        {(!!chapterNotFound ? 
          <div className="container">
            <ChapterNotFound slug={page.slug} className="overlap-top" />
          </div>
          :
          <div className="container">
            <Chapter className="overlap-top" content={page.chapters[chapter-1]} />
            <ChapterNav slug={page.slug} current={chapter} total={chaptersNumber} />
          </div>
        )}
        <Footer
          image={page.feature_image}
        />
      </div>
    );
  }
}

export default withPage(Novel);
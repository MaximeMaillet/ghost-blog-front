import React, {Component} from 'react';
import TopHeader from "../Components/Headers/TopHeader/TopHeader";
import BackgroundImage from "../Components/BackgroundImage/BackgroundImage";
import Footer from "../Components/Footer/Footer";
import withPage from "../Hoc/withPage";
import OnePage from "../Components/Pages/OnePage";

export class Novel extends Component {
  render() {
    const {page} = this.props;
    return (
      <div className="container-fluid p-0 container-post">
        <TopHeader />
        <BackgroundImage
          title={page.title}
          splash={page.feature_image}
        />
        <div className="container">
          <OnePage className="resp-overlap-top-20" page={page} />
        </div>
        <Footer
          image={page.feature_image}
        />
      </div>
    );
  }
}

export default withPage(Novel);

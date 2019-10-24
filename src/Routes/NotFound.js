import React, {Component} from 'react';
import TopHeader from '../Components/Headers/TopHeader/TopHeader';
import BackgroundImage from '../Components/BackgroundImage/BackgroundImage';
import Footer from '../Components/Footer/Footer';
import notFoundImage from '../styles/not-found.jpg';
import {Link} from "react-router-dom";

export class NotFound extends Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <TopHeader />
                <BackgroundImage
                    showTitles={false}
                    splash={notFoundImage}
                />
                <div className="container container-notfound overlap-top-40 p-5">
                    <h1>Cette page n'existe pas</h1>
                    <div className="text-center mt-3 mb-3">
                        <Link className="btn btn-primary" to="/">Accueil</Link>
                    </div>
                    <div className="quote">
                    <p>Je suis perdu, vois-tu, je suis noyé, inondé d'amour; je ne sais plus si je vis, si je mange, si je respire, si je parle; je sais que je t'aime.</p>
                    <p className="author">Alfred De Musset.</p>
                    </div>
                </div>
                <Footer
                    image={this.props.feature_image}
                />
            </div>
        );
    }
}

export default NotFound

import React, {Component} from 'react';
import {apiAdmin} from "../../libraries/api";

import './subscribers.scss'

class Subscribers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsletter_email: '',
      api: null,
    }
  }

  register = async() => {
    try {
      await apiAdmin.subscribers.add({email: this.state.newsletter_email});
      this.setState({api: {success: true}})
    } catch(e) {
      console.warn(e);
      this.setState({api: {success: false, error: 'Cet e-mail existe déjà'}})
    }
  };

  onEmailChange = (email) => {
    this.setState({newsletter_email: email.target.value});
  };

  render() {
    return (
      <div className={`form-subscribers ${this.props.className}`}>
        <p>Inscrivez-vous à la newsletter, soyez alerté des nouvelles histoires, recevez des surprises</p>
        <form>
          <input
            type="email"
            onChange={this.onEmailChange}
            id="newsletterEmail"
            className={`form-control ${this.state.api ? (!this.state.api.success ? 'is-invalid' : 'is-valid') : ''}`}
            placeholder="Enter email" />
          <button onClick={this.register} type="button" className="btn btn-secondary">S'inscrire</button>
        </form>
        {this.state.api && !this.state.api.success ?
          <small id="newsletterEmail" className="text-danger">
            {this.state.api.error}
          </small> : ''
        }
        {this.state.api && this.state.api.success ?
          <small id="newsletterEmail" className="text-success">
            E-mail correctement enregistré
          </small> : ''
        }
      </div>
    );
  }
}

export default Subscribers;

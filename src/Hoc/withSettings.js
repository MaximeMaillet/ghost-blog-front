import React from 'react';
import {connect} from "react-redux";
import Loading from '../Components/Posts/Loading';
import actionsSettings from '../redux/settings/actions';

export default function withSettings(BaseComponent) {
  class PostsComponent extends React.PureComponent {
    componentDidMount() {
      if(!this.props.data) {
        this.props.load();
      }
    }

    componentWillReceiveProps(nextProps, nextContext) {
      if(!nextProps.data) {
        this.props.load();
      }
    }

    render() {
      const {data, loading} = this.props;

      if(loading || !data) {
        return <Loading />;
      }

      return <BaseComponent {...this.props} {...data} />;
    }
  }

  return connect(
    (state) => ({
      loading: state.settings.loading,
      data: state.settings.data,
    }),
    (dispatch) => ({
      load: () => dispatch(actionsSettings.load()),
    })
  )(PostsComponent);
}
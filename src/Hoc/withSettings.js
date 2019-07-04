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

    render() {
      const {data, loading, ...rest} = this.props;

      if(loading || !data) {
        return <Loading />;
      }

      return <BaseComponent {...rest} settings={data} />;
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
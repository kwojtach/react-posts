// @flow

import React, { Component }     from 'react';
import type {AbstractComponent} from 'react';
import { toast }                from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import api from '../../api';

type State = {
  error : boolean
}

function withError<Config : {}> (
  WithErrorComponent: AbstractComponent<Config>
):AbstractComponent<Config> {
  return class extends Component<Config, State> {
    state = {
      error: false
    };

    reqInterceptor = api.interceptors.request.use( request => {
      this.setState({ error: false });
      return request;
    });
    resInterceptor = api.interceptors.response.use( response => response, error => {
      this.setState({ error: true }, () => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: false,
          onClose:   this.onErrorCloseHandler,
          toastId:   3
        })
      });
    });

    componentWillUnmount () {
      api.interceptors.request.eject(this.reqInterceptor);
      api.interceptors.response.eject(this.resInterceptor);
    }

    onErrorCloseHandler = () => {
      this.setState({ error: false });
    };

    render() {
      return ( <WithErrorComponent {...this.props}/> )
    }
  }
}

export default withError;
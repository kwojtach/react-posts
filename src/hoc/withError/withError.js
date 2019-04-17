import React, { Component } from 'react';
import { toast }            from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import api from '../../api';

const withError = WithErrorComponent => {
  return class extends Component {
    state = {
      error: null
    };

    reqInterceptor = api.interceptors.request.use( request => {
      this.setState({ error: null });
      return request;
    });
    resInterceptor = api.interceptors.response.use( response => response, error => {
      this.setState({ error: error }, () => {
        toast.error(this.state.error.message, {
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
      this.setState({ error: null });
    };

    render() {
      return ( <WithErrorComponent {...this.props}/> )
    }
  }
};

export default withError;

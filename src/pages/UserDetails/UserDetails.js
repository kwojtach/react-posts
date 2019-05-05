// @flow

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import type {Location}      from 'react-router-dom';
import type {UserPostProps} from '../../types/components';

import Spinner    from '../../components/UI/Spinner/Spinner';
import UserHeader from '../../components/UserHeader/UserHeader';
import UserPosts  from './UserPosts/UserPosts';
import Modal      from '../../components/UI/Modal/Modal';
import AddForm    from '../../components/AddForm/AddForm';
import withError  from '../../hoc/withError/withError';

import {
  fetchUserPosts,
  deleteUserPost,
  addUserPost
} from '../../store/actions/posts';
import { newPostFields } from '../../constants/addFormFields';

type Props = {
  loadingPosts: boolean,
  posts: Array<UserPostProps>,
  deleteUserPost:  number => void,
  loadingDeleting: boolean,
  deletingPostId:  number,
  addUserPost: Function,
  match:{params:{ userId : number }},
  loadingAddingPost: boolean,
  fetchUserPosts: number => void,
  location: Location
};

type State = {
  addingPost: boolean
};

export class UserDetails extends Component<Props, State> {
  componentDidMount() {
    this.props.fetchUserPosts(this.props.location.state.userId);
  }

  state = { addingPost: false }; // defining if modal is open or not

  onStartAddingPostHandler = () => {
    this.setState({ addingPost: !this.state.addingPost })
  };

  render() {
    const {
      loadingPosts,
      posts,
      deleteUserPost,
      loadingDeleting,
      deletingPostId,
      addUserPost,
      match:{params:{ userId }},
      loadingAddingPost
    } = this.props;

    return (
      <>
        <Modal show={this.state.addingPost} >
          <AddForm
            title              ={'Add post'}
            fields             ={newPostFields}
            additionalFormData ={{userId: userId}}
            closeForm          ={this.onStartAddingPostHandler}
            onSubmitForm       ={addUserPost}
            formSubmitted      ={loadingAddingPost}
          />
        </Modal>

        <UserHeader buttonAction={this.onStartAddingPostHandler} />

        {!loadingPosts ?
          <UserPosts
            posts           ={posts}
            deleteUserPost  ={deleteUserPost }
            loadingDeleting ={loadingDeleting}
            deletingPostId  ={deletingPostId }
          />
        : <Spinner>Loading posts...</Spinner>}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts:             state.posts.posts,
    loadingPosts:      state.posts.loadingPosts,
    loadingDeleting:   state.posts.loadingDeleting,
    deletingPostId:    state.posts.deletingPostId,
    loadingAddingPost: state.posts.loadingAddingPost
  }
};

const mapDispatchToProps = {
  fetchUserPosts,
  deleteUserPost,
  addUserPost
};

export default connect(mapStateToProps, mapDispatchToProps)(withError(UserDetails));

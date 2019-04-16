import React, { Component } from 'react';
import { connect }          from 'react-redux';

import Spinner    from '../../components/UI/Spinner/Spinner';
import UserHeader from '../../components/UserHeader/UserHeader';
import UserPost   from './UserPost/UserPost';
import Modal      from '../../components/UI/Modal/Modal';
import AddForm    from '../../components/AddForm/AddForm';
import withError  from '../../hoc/withError/withError';

import {
  fetchUserPosts,
  deleteUserPost,
  addUserPost
} from '../../store/actions/posts';

class UserDetails extends Component {
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
      match:{params:{userId}},
      loadingAddingPost
    } = this.props;

    let postsList = <Spinner>Loading posts...</Spinner>;

    if (!loadingPosts) {
      postsList = posts.map( post => (
        <UserPost
          key             ={post.id}
          post            ={post}
          deleteUserPost  ={deleteUserPost}
          loadingDeleting ={loadingDeleting}
          deletingPostId  ={deletingPostId}
        />
      ))
    }

    return (
      <>
        <Modal show={this.state.addingPost} >
          <AddForm
            title ={'Add post'}
            fields={[
              {type: 'text',     name: 'title', label: 'Title'},
              {type: 'textarea', name: 'body',  label: 'Body'}
            ]}
            additionalFormData ={{userId: userId}}
            closeForm          ={this.onStartAddingPostHandler}
            onSubmitForm       ={addUserPost}
            formSubmitted      ={loadingAddingPost}
          />
        </Modal>

        <UserHeader buttonAction={() => this.onStartAddingPostHandler()} />

        {postsList}
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

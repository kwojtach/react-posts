import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/UI/Spinner/Spinner';
import UserHeader from '../../components/UserHeader/UserHeader';
import UserPost from './UserPost/UserPost';
import Modal from '../../components/UI/Modal/Modal';
import AddForm from '../../components/AddForm/AddForm';
import {
  fetchUserPosts,
  deleteUserPost,
  addUserPost
} from '../../store/actions/posts';
import withError from "../../hoc/withError/withError";

class UserDetails extends Component {
  componentDidMount() {
    this.props.onFetchUserPosts(this.props.location.state.userId);
  }

  state = {
    addingPost: false
  };

  onStartAddingPostHandler = () => {
    this.setState({
      addingPost: !this.state.addingPost
    })
  };

  render() {
    let posts = <Spinner>Loading posts...</Spinner>;
    if (!this.props.loadingPosts) {
      posts = this.props.posts.map( post => (
        <UserPost
          key={post.id}
          post={post}
          deleteUserPost={this.props.onDeleteUserPost}
          loadingDeleting={this.props.loadingDeleting}
          deletingPostId={this.props.deletingPostId} />
      ))
    }

    return (
      <>
        <Modal show={this.state.addingPost} >
          <AddForm
            title={'Add post'}
            fields={[
              {type: 'text', name: 'title', label: 'Title'},
              {type: 'textarea', name: 'body', label: 'Body'}
            ]}
            additionalFormData={{userId: this.props.match.params.userId}}
            closeForm={this.onStartAddingPostHandler}
            onSubmitForm={this.props.onAddUserPost}
            formSubmitted={this.props.loadingAddingPost} />
        </Modal>
        <UserHeader buttonAction={() => this.onStartAddingPostHandler()} />
        {posts}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    loadingPosts: state.posts.loadingPosts,
    loadingDeleting: state.posts.loadingDeleting,
    deletingPostId: state.posts.deletingPostId,
    loadingAddingPost: state.posts.loadingAddingPost
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUserPosts: userId => dispatch(fetchUserPosts(userId)),
    onDeleteUserPost: postId => dispatch(deleteUserPost(postId)),
    onAddUserPost: postData => dispatch(addUserPost(postData))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withError(UserDetails));
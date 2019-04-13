import React, { Component } from 'react';
import { connect } from "react-redux";

import UserHeader from '../../components/UserHeader/UserHeader';
import Button from '../../components/UI/Button/Button';
import Comments from './Comments/Comments';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import AddForm from '../../components/AddForm/AddForm';
import classes from './PostDetails.module.scss';
import {
  fetchComments,
  clearCommentsLoaded,
  addComment
} from '../../store/actions/comments';
import {deleteUserPost} from "../../store/actions/posts";

class PostDetails extends Component {
  componentWillReceiveProps(nextProps){
    if (nextProps.commentsLoaded) {
      this.setState({
        showComments: true
      })
    }
  }

  componentWillUnmount() {
    this.props.onClearCommentsLoaded();
  }

  state = {
    showComments: false,
    addingComment: false
  };

  onStartAddingCommentHandler = () => {
    this.setState({
      addingComment: !this.state.addingComment
    })
  };

  onShowCommentsHandler = () => {
    this.props.onFetchComments(this.props.match.params.postId, this.props.commentsLoaded);
    if (this.props.commentsLoaded) {
      this.setState({
        showComments: !this.state.showComments
      })
    }
  };

  render() {
    return (
      <>
        <Modal
          show={this.state.addingComment}
          closeModal={this.onStartAddingCommentHandler} >
          <AddForm
            title={'Add comment'}
            fields={[
              {type: 'text', name: 'name', label: 'Name'},
              {type: 'email', name: 'email', label: 'Email'},
              {type: 'textarea', name: 'body', label: 'Body'}
            ]}
            additionalFormData={{postId: this.props.match.params.postId}}
            closeForm={this.onStartAddingCommentHandler}
            onSubmitForm={this.props.onAddComment}
            formSubmitted={this.props.loadingAddingComment} />
        </Modal>
        <UserHeader
          buttonAction={() => this.props.onDeleteUserPost(this.props.match.params.postId, this.props.history.goBack)}
          postDetails />
        <div className={classes.PostDetails}>
          <h2>{this.props.location.state.postTitle}</h2>
          <p>{this.props.location.state.postText}</p>
        </div>
        <div className={classes.ButtonsContainer}>
          <Button clicked={() => this.onShowCommentsHandler()}>{!this.state.showComments ? 'Show comments' : 'Hide comments'}</Button>
          {this.state.showComments ? <Button clicked={() => this.onStartAddingCommentHandler()}>Add comment</Button> : null}
        </div>
        {this.props.loadingComments ?
          <Spinner>Loading comments...</Spinner>
          : this.state.showComments ?
            <Comments
              loadingComments={this.props.loadingComments}
              comments={this.props.comments} /> : null}

      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments.comments,
    loadingComments: state.comments.loadingComments,
    commentsLoaded: state.comments.commentsLoaded,
    loadingAddingComment: state.comments.loadingAddingComment,
    loadingDeleting: state.posts.loadingDeleting,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchComments: (postId, loaded) => dispatch(fetchComments(postId, loaded)),
    onClearCommentsLoaded: () => dispatch(clearCommentsLoaded()),
    onAddComment: commentData => dispatch(addComment(commentData)),
    onDeleteUserPost: (postId, changeRoute) => dispatch(deleteUserPost(postId, changeRoute))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
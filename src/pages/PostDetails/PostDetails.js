import React, { Component } from 'react';
import { connect }          from "react-redux";

import UserHeader from '../../components/UserHeader/UserHeader';
import Button     from '../../components/UI/Button/Button';
import Comments   from './Comments/Comments';
import Modal      from '../../components/UI/Modal/Modal';
import AddForm    from '../../components/AddForm/AddForm';
import withError  from '../../hoc/withError/withError';
import classes    from './PostDetails.module.scss';

import {
  fetchComments,
  clearCommentsLoaded,
  addComment
} from '../../store/actions/comments';
import { deleteUserPost }   from '../../store/actions/posts';
import { newCommentFields } from '../../constants/addFormFields';

class PostDetails extends Component {
  // variable created to stop "setState" when component will unmount (when post was deleted)
  _isUnMounted = false;

  componentWillReceiveProps(nextProps){
    if (!this._isUnMounted) {
      if (nextProps.commentsLoaded) this.setState({ showComments: true });
    }
  }

  componentWillUnmount() {
    this._isUnMounted = true;
    this.props.clearCommentsLoaded();
  }

  state = {
    showComments:  false,
    addingComment: false  // defining if modal is open or not
  };

  onStartAddingCommentHandler = () => {
    this.setState({ addingComment: !this.state.addingComment });
  };

  onShowCommentsHandler = () => {
    this.props.fetchComments(this.props.match.params.postId, this.props.commentsLoaded);

    if (this.props.commentsLoaded) {
      this.setState({ showComments: !this.state.showComments });
    }
  };

  render() {
    const {
      addComment,
      loadingAddingComment,
      deleteUserPost,
      loadingDeleting,
      loadingComments,
      comments,
      match:    {params:{ postId }},
      location: {state: { postTitle, postText }},
      history:  {goBack}
    } = this.props;

    return (
      <>
        <Modal show={this.state.addingComment} >
          <AddForm
            title              ={'Add comment'}
            fields             ={newCommentFields}
            additionalFormData ={{postId: postId}}
            closeForm          ={this.onStartAddingCommentHandler}
            onSubmitForm       ={addComment}
            formSubmitted      ={loadingAddingComment}
          />
        </Modal>

        <UserHeader
          buttonAction    ={() => deleteUserPost(postId, goBack)}
          loadingDeleting ={loadingDeleting}
          postDetails
        />

        <div className={classes.PostDetails}>
          <h2>{postTitle}</h2>
          <p>{postText}</p>
        </div>

        <div className={classes.ButtonsContainer}>
          <Button onClick={this.onShowCommentsHandler}>{!this.state.showComments ? 'Show comments' : 'Hide comments'}</Button>
          {this.state.showComments ? <Button onClick={this.onStartAddingCommentHandler}>Add comment</Button> : null}
        </div>

        <Comments
          loadingComments ={loadingComments}
          comments        ={comments}
          showComments    ={this.state.showComments}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments:             state.comments.comments,
    loadingComments:      state.comments.loadingComments,
    commentsLoaded:       state.comments.commentsLoaded,
    loadingAddingComment: state.comments.loadingAddingComment,
    loadingDeleting:      state.posts.loadingDeleting,
  }
};

const mapDispatchToProps = {
  fetchComments,
  clearCommentsLoaded,
  addComment,
  deleteUserPost
};

export default connect(mapStateToProps, mapDispatchToProps)(withError(PostDetails));

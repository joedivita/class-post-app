import * as React from 'react';
import { PostForm } from './PostForm';
import * as axios from 'axios';
import { notification } from 'antd';

class CreatePost extends React.Component {

  // Create Post User Feedback

  sendSuccessNotification() {
    notification['success']({
      message: 'Success!',
      description: 'Yay! Your new post has been created successfully.',
    });
  }

  sendErrorNotification() {
    notification['error']({
      message: 'Uh Oh',
      description: 'An unexpected error occurred, please try again.',
    });
  }

  redirectToPosts() {
    this.context.router.push('/posts');
  }

  startLoading(callback, args) {
    this.setState({
      loading: true
    }, () => callback(args));
  }

  endLoading() {
    this.setState({
      loading: false,
    });
  }

  // Data Request Methods

  sendNewPostRequest(newPostData) {
    axios.post('/posts', newPostData)
      .then((data) => {
        this.endLoading();
        this.sendSuccessNotification();
        this.redirectToPosts();
      })
      .catch((error) => {
        this.endLoading();
        this.sendErrorNotification();
      });
  }

  saveNewPost(newPostData) {
    this.startLoading(() =>
      this.sendNewPostRequest(newPostData)
    );
  }

  // Initial State

  initializeState() {
    this.setState({
      loading: false
    });
  }

  // Lifecycle Methods

  componentWillMount() {
    this.initializeState();
  }

  render() {
    return (
      <div>
        <h2>New Post</h2>
        <PostForm
          loading={this.state.loading}
          action={(newPostData) => this.saveNewPost(newPostData)}
          defaultTitle={'Sample Title'}
          defaultCategory={'Sample Category'}
        />
      </div>
    );
  }
}

// CreatePost contextTypes
// Needed to get reference to router context
// so that we can redirect the user programmatically1
// with react router.

CreatePost.contextTypes = {
  router: React.PropTypes.any
};

export { CreatePost };

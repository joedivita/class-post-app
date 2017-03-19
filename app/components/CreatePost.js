import * as React from 'react';
import { PostForm } from './PostForm';
import { notification } from 'antd';
import * as axios from 'axios';

class CreatePost extends React.Component {

  // Create Post User Feedback

  startLoading() {
    this.setState({
      loading: true
    });
  }

  endLoading() {
    this.setState({
      loading: false
    });
  }

  redirectToPosts() {
    this.context.router.push('posts');
  }

  sendSuccessNotification() {
    notification['success']({
      message: 'Yayyy!!',
      description: 'Your post has been created.',
    });
  }

  sendErrorNotification() {
    notification['error']({
      message: 'Uh Oh',
      description: 'Something went wrong, please try again.',
    });
  }

  // Data Request Methods

  createPost(postObj) {
    this.startLoading();
    axios.post('/posts', postObj)
      .then(() => {
        this.sendSuccessNotification();
        this.endLoading();
        this.redirectToPosts();
      })
      .catch((error) => {
        this.sendErrorNotification();
        this.endLoading();
      });
  }

  // Setting Initial State

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
          submitAction={(postObj) => this.createPost(postObj)}
          defaultTitle={'Foobar'}
          defaultCategory={'Programming'}
          defaultDate={'2017-03-05'}
        />
      </div>
    )
  }
}

// CreatePost contextTypes
// Needed to get reference to router context
// so that we can redirect the user programmatically
// with react router.
CreatePost.contextTypes = {
  router: React.PropTypes.any
};

export { CreatePost };

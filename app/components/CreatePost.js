import * as React from 'react';
import { PostForm } from './PostForm';
import * as axios from 'axios';

class CreatePost extends React.Component {
  saveNewPost(newPostData) {
    console.log('create post form submitted', newPostData);
    axios.post('/posts', newPostData)
      .then((data) => {
        console.log('success', data);
        this.context.router.push('/posts');
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  render() {
    return (
      <div>
        <h2>New Post</h2>
        <PostForm action={(newPostData) => this.saveNewPost(newPostData)} />
      </div>
    );
  }
}

CreatePost.contextTypes = {
  router: React.PropTypes.any
};

export { CreatePost };

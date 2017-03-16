import * as React from 'react';
import { Button } from 'antd';

class PostForm extends React.Component {

  // Form Event Handlers

  updateInput(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleSubmitForm(event) {
    event.preventDefault();
    this.props.action(this.state);
  }

  // Initial State

  initializeState() {
    this.setState({
      title: 'Foo',
      category: 'Bar'
    });
  }

  // Lifecycle Methods

  componentWillMount() {
    this.initializeState();
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmitForm(event)}>
        <div className='form-row'>
          <label htmlFor='title'>Title:</label><br/>
          <input
            id='title'
            type='text'
            onChange={(event) => this.updateInput(event)}
            value={this.state.title}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='category'>Category:</label><br/>
          <input
            id='category'
            type='text'
            onChange={(event) => this.updateInput(event)}
            value={this.state.category}
          />
        </div>
        <div className='form-row'>
          <Button
            type='primary'
            loading={this.props.loading}
            htmlType='submit'
          >
            Create Post
          </Button>
        </div>
      </form>
    );
  }
}

// Props PostForm component
// Requires an "action" function
// Optional "loading" boolean value

PostForm.propTypes = {
  action: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool
};

export { PostForm };

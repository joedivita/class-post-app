import * as React from 'react';

class PostForm extends React.Component {
  initializeState() {
    this.setState({
      title: 'Foo',
      category: 'Bar'
    });
  }

  componentWillMount() {
    this.initializeState();
  }

  updateInput(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <form onSubmit={() => this.props.action(this.state)}>
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
          <button type='submit'>Create Post</button>
        </div>
      </form>
    );
  }
}

PostForm.propTypes = {
  action: React.PropTypes.func.isRequired
};

export { PostForm };

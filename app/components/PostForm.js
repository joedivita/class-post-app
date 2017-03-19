import * as React from 'react';
import { Select, Button, DatePicker } from 'antd';
import moment from 'moment';
const Option = Select.Option;

class PostForm extends React.Component {

  // Form Event Handlers

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitAction(this.state);
  }

  handleUpdateTextInput(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleUpdateCategory(newVal) {
    this.setState({
      category: newVal
    });
  }

  handleUpdateDate(newValMoment, newValString) {
    this.setState({
      date: newValString
    });
  }

  // Setting Initial State

  initializeState() {
    this.setState({
      title: this.props.defaultTitle || '',
      category: this.props.defaultCategory || '',
      date: this.props.defaultDate || ''
    });
  }

  // Lifecycle Methods

  componentWillMount() {
    this.initializeState();
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className='form-row'>
            <label htmlFor='title'>Title</label><br/>
            <input
              defaultValue={this.state.title}
              type='text'
              id='title'
              onChange={(event) => this.handleUpdateTextInput(event)}
            />
          </div>

          <div className='form-row'>
            <label htmlFor='category'>Category</label><br/>
            <Select
              defaultValue={this.state.category}
              style={{ width: 120 }}
              onChange={(newVal) => this.handleUpdateCategory(newVal)}
            >
              <Option value="Programming">Programming</Option>
              <Option value="Javascript">Javascript</Option>
              <Option value="React">React</Option>
            </Select>
          </div>

          <div className='form-row'>
            <DatePicker
              defaultValue={moment(this.state.date)}
              onChange={(newValMoment, newValString) =>
                this.handleUpdateDate(newValMoment, newValString)
              }
            />
          </div>

          <div className='form-row'>
            <Button
              type='primary'
              htmlType='submit'
              loading={this.props.loading}
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

// Props for PostForm component
// Requires a "submitAction" function
// Optional "loading" boolean value
// Optional "defaultTitle" string value
// Optional "defaultCategory" string value
// Optional "defaultDate" string value
PostForm.propTypes = {
  submitAction: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  defaultTitle: React.PropTypes.string,
  defaultCategory: React.PropTypes.string,
  defaultDate: React.PropTypes.string
};

export { PostForm };

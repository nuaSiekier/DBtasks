import React, { Component } from 'react';
import './App.css';
import TaskList from './TaskList';

 export default class PostTask extends Component {
  state = { name: '', description: '', status: 1}

  formChanged = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  formSubmitted = (e) => {
    e.preventDefault();
    console.log(this.state);
    const { name, description, status } = this.state;

    fetch('https://localhost:44397/api/tasksdb', {
      method: 'post',
      body: JSON.stringify({ title: name, description: description, status: status }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(() => {
        this.props.history.push('/tasklist')
      })
  }

  render() {
    return (
      <div class='form-style-5'>
        <form onSubmit={this.formSubmitted}>
          <h3>To do List</h3>
          <fieldset>
            <input name='name' type='text' placeholder='Enter your task name' value={this.state.name} onChange={this.formChanged} />
            <input name='description' type='text' placeholder='Enter task description' value={this.state.description} onChange={this.formChanged} />
            <select name='status' onChange={this.formChanged}>
              <option value='1'>To do</option>
              <option value='2'>In progress</option>
              <option value='3'>Done</option>
            </select>
            <button type='submit'>Submit</button>

          </fieldset>
        </form>

      </div>
    )
  }
}
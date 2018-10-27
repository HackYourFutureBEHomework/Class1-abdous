import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/appState/actions'

class AddTodo extends Component {

  handleSubmit = e => {
    e.preventDefault()
    if (!this.description.value.trim()) {
      return
    }
    this.props.onAddTodo(this.description.value)
    this.description.value = ''
  }

  render () {
    return (
      <div>
        <h1> My New Todo List</h1>
        <form
          onSubmit={this.handleSubmit}
        >
          <input
            type='text'
            placeholder={'enter Description'}
            ref={node => this.description = node}
          />

          <br/>

          <input
            type='date'
            ref={node => this.date = node}
          />
          <br/>

          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onAddTodo: text => dispatch(addTodo(text))
})

export default connect(null, mapDispatchToProps)(AddTodo)
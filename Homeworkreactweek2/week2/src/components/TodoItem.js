import React, { Component } from 'react'
class TodoItem extends Component {
  render () {
    const {id, description, deadline, done} = this.props.todoItem
    const todoItemClicked = this.props.todoItemClicked
    const itemDeleted = this.props.itemDeleted
    return (
      <label className={done ? 'done' : ''}>
        <div className="listItem">
          <span>
                    <input type="checkbox"
                           checked={done}
                           onChange={() => { todoItemClicked(id)}}
                    />
          </span>
          <span>{description}</span>
          <span>{deadline}</span>
          <span>
            <button type="button" className="deleteButton" onClick={() => {itemDeleted(id)}}>Delete</button>
          </span>
        </div>
      </label>
    )
  }
}
export default TodoItem 
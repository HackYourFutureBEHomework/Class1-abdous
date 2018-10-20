import React, { Component } from 'react'
<<<<<<< HEAD
=======

>>>>>>> b94788cbd29aedf65e84f6711aa7d68c2c180ede
class TodoItem extends Component {
  render () {
    const {id, description, deadline, done} = this.props.todoItem
    const todoItemClicked = this.props.todoItemClicked
    const itemDeleted = this.props.itemDeleted
<<<<<<< HEAD
=======

>>>>>>> b94788cbd29aedf65e84f6711aa7d68c2c180ede
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
<<<<<<< HEAD
=======

>>>>>>> b94788cbd29aedf65e84f6711aa7d68c2c180ede
        </div>
      </label>
    )
  }
}
<<<<<<< HEAD
export default TodoItem 
=======

export default TodoItem
>>>>>>> b94788cbd29aedf65e84f6711aa7d68c2c180ede

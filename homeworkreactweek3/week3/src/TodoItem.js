import React, { Component } from 'react'
import EditableLabel from "react-inline-editing";

class TodoItem extends Component {
  render () {
    const {id, description, deadline, done} = this.props.todoItem
    const todoItemClicked = this.props.todoItemClicked
    const itemRemoved = this.props.itemRemoved
    
    return (
      <label className={done ? 'done' : ''}>
        <div className="listItem">
          <span>
                <input type="checkbox"
                           checked={done}
                           onChange={() => { todoItemClicked(id)}}
                />
          </span>
          
          <span>   
                    <EditableLabel 
                        text={description + ", " + deadline}
                        
                        inputClassName="myInputClass"
                        inputWidth="300px"
                        inputHeight="25px"
                        // labelFontWeight="bold"
                        // inputFontWeight="bold"
                        onFocus={this.handleFocus}
                        onFocusOut={this.handleFocusOut}/>
         </span>
          
          <span>
                <button type="button" 
                className="RemoveButton" 
                onClick={() => {itemRemoved(id)}}>Delete</button>
          </span>
          
        </div>
      </label>
    )
  }
}
export default TodoItem 
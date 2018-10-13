import React, { Component } from 'react';


class Container extends Component{
    render(){
        const { id, description, deadline, done } = this.props;
        const todos = this.props.todos;
        const todoItemClicked= this.props.todoItemClicked;
        const itemDeleted= this.props.itemDeleted;
        
        
        
        
            return(
                <div className="list" >

                <span className='t'>
                <input className="chkbox" type="checkbox" 
                checked={todos.done? "checked}":""} 
                onChange ={()=>{ todoItemClicked (todos.id)} }
                /> </span> 

                <span className="t">{todos.description}</span> 
                <span className="t">{todos.deadline}</span>
                <span className='t'> <button type="button" className="deleteButton" 
                onClick ={ ()=>{itemDeleted (todos.id)}}>Delete</button> 
                </span>


                </div>
            )
    }
}

class TodoItem extends Component {
    render(){
        const todosRenderPart= this.props.filteredItems.map((todos,index) =>{
            return(
                <Container
                key={index}
                todos={todos}
                todoItemClicked = {this.props.todoItemClicked}
                itemDeleted= {this.props.itemDeleted}
                />
            )
        })
        return (
            <li className='todos' >
                {todosRenderPart}
            </li>
        )
    }
}
 
export default TodoItem;
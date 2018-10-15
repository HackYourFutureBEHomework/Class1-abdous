import React, { Component } from 'react'
import './index.css'
import todoList from './todolist.json'
import TodoItem from './components/TodoItem.js'





class App extends Component {

  constructor (props) {
    super(props)

    this.state ={

      todoList: todoList,
      searchString: ''
    }

  }

  //  toggle to do done///
  todoItemClicked = (index) =>{
    const newTodoList = this.state.todoList.map((todoItem) => {
        if (index === todoItem.id)
          todoItem.done = !todoItem.done

        this.setState({mytodos: newTodoList});

        return todoItem
      });
    this.setState({todoList: newTodoList})
    }
     
  
  
    itemDeleted = (index) => {
      const newTodoList = this.state.todoList.filter((todoItem) => {
        return todoItem.id !== index
      })

  
  this.setState({todoList: newTodoList})
  }
  
  
  itemSearching = (e) => {
    const searchString = e.target.value
    this.setState({
        
      searchString: searchString
    })
  }


  render(){
    const filteredItems = this.state.todoList.filter((todoItem) => {
      const regex = new RegExp(this.state.searchString, 'g')
      return regex.test(todoItem.description)


      })
    const todoList = filteredItems.map((todoItem, index) => {
        return (
          <TodoItem
              key={index}
              todoItem={todoItem}
              todoItemClicked={this.todoItemClicked}
              itemDeleted={this.itemDeleted}
            />
          )
        
    })
  

    return (
      <div className="container">
      <h1>My Todo List </h1>
      <input
        className='search'
        placeholder='begin searching'
        type='text'
        onChange={this.itemSearching}
      />
      <li className='todoList'>
        {todoList}
      </li>
    </div>
  )
}
}


export default App;
import React, { Component } from 'react';
import todoList from './todolist.json';
import TodoItem from './TodoItem.js'
//import './App.css';


class App extends Component {
  
  constructor(props){
      super(props)

      this.state = {
        newItems: '',
        nextID: 4,
        todoList: todoList,
        
      }
      
    
  }
  


  addNewItem = (e) => {
    e.preventDefault()
    const {todoList, nextID} = this.state
    const description = this.newItemText.value
    const deadline = this.newItemDate.value
    const newItem = {
      id: nextID,
      description,
      deadline,
      done: false
    }
    const newTodoList = [...todoList, newItem]
    this.setState({
      todoList: newTodoList,
      nextID: nextID + 1
    })
    this.newItemText.value = ''
    this.newItemDate.value = ''
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
       
    
    
  itemRemoved = (index) => {
        const newTodoList = this.state.todoList.filter((todoItem) => {
          return todoItem.id !== index
        })
  
    
    this.setState({todoList: newTodoList})
    }

  



  
  

  render() {

    const filteredItems = this.state.todoList.filter((todoItem) => {
      const regex = new RegExp(this.state.searchString, 'g')
      return regex.test(todoItem.description)
    })




    const todoList = filteredItems.map((todoItem, index) => {
      if (todoItem.length === 0)
          return <p className =''> No Itemes</p>
      return (
        <TodoItem
            key={index}
            todoItem={todoItem}
            todoItemClicked={this.todoItemClicked}
            itemRemoved={this.itemRemoved}
            
          />
        )
      
  })
    
    return (
      
      <div className="container">
          <h1>My Todo List </h1>
          <h3> Adding New item</h3>

        <li className='todoList'>        
                
        <form onSubmit={this.addNewItem}>
           <input
             type='text'
             placeholder='Enter Description'
             ref={el => this.newItemText = el}
             required
           />
           <input
             type='date'
             placeholder=' Deadline'
             ref={el => this.newItemDate = el}
             required
           />
           <button>Add New item</button>
         </form>        
                {todoList}
                
          </li>

        
        </div >      
  )
    
  }
  }

export default App;

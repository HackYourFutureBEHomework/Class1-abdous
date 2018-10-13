import React, { Component } from 'react';
import './index.css';
import todos from './todolist.json'
import TodoItem from './components/todoitem.js'
//import TodoItems from './components/todoitems.js'





class App extends Component {

  constructor(props) {
    super(props);

    this.state ={

      mytodos: todos,
      searchString: ''
    }
  }



  //  toggle to do done///
  todoItemClicked = (index) =>{
        const newData = this.state.mytodos.map( (item) => {
  
           if (index === item.id)
               item.done = !item.done;

               return item;
             });

        this.setState({mytodos: newData});

   }
  
  
  itemDeleted = (index) =>{
    const deletedItem = this.state.mytodos.filter((item)=>{
      return item.id !== index
    })

    this.setState({mytodos: deletedItem});
  }
  
  
  itemSearching = (e) =>{
    const searchString = e.target.value
    this.setState({
        searchString: searchString});
  }


  render(){
    const filteredItems = this.state.mytodos.filter((repo)=>{
        const regex = new RegExp(this.state.searchString, 'g')
        return regex.test(todos.description)
    })
    const mytodos = this.state.mytodos

    return (
      
      <div className = "container">
        <h1 className='h'>My Todo List </h1>
        <input className='search' 
            placeholder ='begin seaching' 
            type='text'  
            onChange={this.itemSearching}/>
            <TodoItem  className='container1' filteredItems={filteredItems}
            todoItemClicked={this.todoItemClicked}
            itemDeleted={this.itemDeleted}
            />



      </div>
    )
  }
}




export default App;
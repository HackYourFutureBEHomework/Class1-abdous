import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import myMovies from './movieList.json';
import './index.css';


const ListItem = (props) =>{

  return(

    <div className="container">

      <img className=" image" src={props.list.imgSrc}/>
      
      <h1>{props.list.name}</h1>

      <div className= "ReleaseDurationGenre">
        <ul className="list">
          <li className="list1">{props.list.released}</li>
          <li className="list1">{props.list.duration}</li>
          <li className="list1">{props.list.genres}</li> 
        </ul>
      </div>

      <div className="DirectorActor">
        <ul className="list">
          <li className="list1">{props.list.director}</li>
          <li className="list1">{props.list.actors}</li>
          </ul>
      </div>

      <div className="description">
        <p>{props.list.description}</p>
      </div>
      
      
    </div>
    
    
    
  )
}




class App extends Component {
  render() {
    const Lists = myMovies.map((list, index) =>{
      return (
        <ListItem key = {index} list={list}/>
      )
    })
    console.log(Lists)
    return(
      <ul>
        {Lists}
      </ul>
    
      )
        
      
    
    
  }
}

export default App;

//TodoList is a list showing visible todos.
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { connect } from 'react-redux'
import { toggleTodo } from '../redux/appState/actions'

class TodoList extends Component {
  render () {
    const {todoList} = this.props
    return (
      <ul>
        {
          todoList.map((todo, index) => (
            <Todo
              key={index}
              {...todo}
            />
          ))
        }
      </ul>
    )
  }
}

TodoList.propTypes = {
  List: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

const mapStateToProps = ({appState}) => ({
  todoList: appState.todoList,
})

const mapDispatchToProps = dispatch => ({
  onTodoClick: index => dispatch(toggleTodo(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
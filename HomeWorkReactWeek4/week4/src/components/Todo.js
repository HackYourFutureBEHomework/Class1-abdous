//todo is a single todo item

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleTodo } from '../redux/appState/actions'

const Todo = ({ onTodoClick, id, done, deadline, description }) => (
  <li
    onClick={() => onTodoClick(id)}
    style={{
      textDecoration: done ? 'line-through' : 'none'
    }}
  >
    {description} {deadline}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id))
})

export default connect(null, mapDispatchToProps)(Todo)
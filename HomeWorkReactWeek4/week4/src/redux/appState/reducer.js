import todoList from './todoList.json'

const initialState = {
  todoList
}

export default (state = initialState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {

    case 'ADD_TODO':
      newState.todoList = [...state.todoList, action.item]
      return newState

    case 'DELETE_TODO':
      newState.todoList = state.todoList.filter((item, index) => index !== action.index)
      return newState

    case 'TOGGLE_TODO':
      newState.todoList = state.todoList.map(todoItem => {
        if(todoItem.id === action.id) {
          todoItem = {...todoItem}
          todoItem.done = !todoItem.done
        }
        return todoItem
      })
      return newState

    case 'SET_VISIBILITY_FILTER':
      const VisibilityFilters = {SHOW_ALL: 'SHOW_ALL'}
      return action.filter

    default:
      return state
  }
}
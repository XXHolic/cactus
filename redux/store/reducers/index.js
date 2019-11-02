import { combineReducers } from 'redux'
import counter from './counter'
import home from './home'

let resucers = combineReducers({
  home,
  counter
})

export default resucers
import {combineReducers} from 'redux'
import {turnOrder} from './turnOrder'
import {texts} from './texts'

export const battleSystemApp = combineReducers({
  turnOrder,
  texts
})

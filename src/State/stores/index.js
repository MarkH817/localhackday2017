import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {battleSystemApp} from '../reducers'

export const store = process.env.NODE_ENV === 'test'
  ? createStore(battleSystemApp)
  : createStore(battleSystemApp, applyMiddleware(logger))

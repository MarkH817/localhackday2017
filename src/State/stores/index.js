import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {battleSystemApp} from '../reducers'

export const store = createStore(battleSystemApp, applyMiddleware(logger))

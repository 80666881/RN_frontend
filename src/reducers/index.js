import todos from './todos'
import filter from './filter'
import text from './text'
//redux提供的combineReducers只能识别普通js对象
import {combineReducers} from 'redux'

export default combineReducers({
    todos,
    filter,
    text
})



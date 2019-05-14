//因为在reducer中还要使用type，所以这里要在actionType中统一定义
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_FILTER,
    SET_TODO_TEXT,
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE
} from './actionTypes'

let nextTodoId = 0

import Toast from 'react-native-root-toast'; // 引入类库

const fetchTodosRequest = () => ({
    type: FETCH_TODOS_REQUEST,

})
const fetchTodoSuccess = (data) => ({
    type: FETCH_TODOS_SUCCESS,
    data

})
const fetchTodosFailure = (error) => ({
    type: FETCH_TODOS_FAILURE,
    error
})

/**
 * 异步action调用
 */
export const fetchTodos = ()=>{
    return (dispatch)=>{
        // 通过调用 Toast.show(message, options); 可以在屏幕上显示一个toast，并返回一个toast实例
        let toast = Toast.show('fetching message', {
            duration: Toast.durations.LONG, // toast显示时长
            position: Toast.positions.CENTER, // toast位置
            shadow: true, // toast是否出现阴影
            animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
            hideOnPress: true, // 是否可以通过点击事件对toast进行隐藏
            delay: 0, // toast显示的延时
            onShow: () => {
                // toast出现回调（动画开始时）
            },
            onShown: () => {
                // toast出现回调（动画结束时）
            },
            onHide: () => {
                // toast隐藏回调（动画开始时）
            },
            onHidden: () => {
                // toast隐藏回调（动画结束时）
            }
        });
        dispatch(fetchTodosRequest())
        return fetch('https://easy-mock.com/mock/5cd63b577f8f72433eeaa108/example/todos',{
            method: 'GET',

        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'

              },
        }).then(
            response =>{
                response.json().then(data=>{
                    dispatch(fetchTodoSuccess(data.data))
                    setTimeout(()=>{
                        Toast.hide(toast);
                    },600)
                })
            },
            error=>{
                dispatch(fetchTodosFailure(error))
                console.log('error...',error)
            }
        )

    }
}
/**
 * 新增待办事项
 */
export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
})

/**
 * 切换完成状态
 * @param {*} id 
 */
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})


/**
 * 设置过滤状态
 * @param {*} filter 
 */
export const setFilter = filter => ({
    type: SET_FILTER,
    filter
})

/**
 * 设置新增待办事项的文本
 * @param {*} text 
 */
export const setTodoText = text => ({
    type: SET_TODO_TEXT,
    text
})
import React, { Component } from 'react';
import Todo from './Todo'
import {View,Text} from 'react-native'
class TodoList extends Component {
    componentDidMount(){
        console.log('this',this.props.todos)
        // this.props.fetchTodos()
    }
    render() {
        const {todos} = this.props

        return (
            <View>
                {todos.map((todo)=>{
                    return(
                        <Text>{todo.text}</Text>
                    )
                })
                }
            </View>
        );
    }
}

export default TodoList;
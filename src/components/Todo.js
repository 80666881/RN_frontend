import React, { Component } from 'react';
import {View} from 'react-native'

class Todo extends Component {
    render() {
        const {completed,text,onClick} = this.props
        return (
            <View 
            onClick={onClick}
            style={{
                textDecoration:completed?"line-through":"none"
            }}>{text}</View>
        );
    }
}

export default Todo;
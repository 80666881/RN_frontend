import React from "react";


import { Text, View, Button } from 'react-native';
import AddTodoContainer from '../containers/AddTodoContainer.js'
import TodoListContainer from '../containers/TodoListContainer.js'

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>首页1</Text>
                <Text>22222</Text>
                <Text>ssd</Text>
                <Button
                    onPress={this.onPressLearnMore}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <AddTodoContainer></AddTodoContainer>
                <TodoListContainer></TodoListContainer>
            </View>
        );
    }

    onPressLearnMore=()=>{
        console.log('ss')
      }
}
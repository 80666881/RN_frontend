import React, { Component } from 'react';
import {Button,TextInput,Text,View,TouchableOpacity,StyleSheet} from 'react-native'
class AddTodo extends Component {
    render() {
        return (
            <View>
                <TextInput value={this.props.text} onChangeText={this.handleChange}></TextInput>
                <Button onPress={this.handleClick} title="add todo"/>
                <TouchableOpacity onPress={this.fetchFromApi} style={styles.button}>
                    <Text style={styles.buttonText}>fetch api</Text>
                </TouchableOpacity>

            </View>
        );
    }
    handleChange = (value)=>{
        //注意这里拿的是value，跟web不同，web拿的是e.target.value
        this.props.setTodoText(value)
    }
    handleClick = ()=>{
        this.props.addTodo(this.props.text)
    }
    fetchFromApi = ()=>{
        this.props.fetchFromApi()
    }

}

const styles = StyleSheet.create({
    button:{
        height:40,
        width:100,
        borderRadius:20,
        backgroundColor:'gray',
        lineHeight:40,
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        lineHeight: 40,
    }
})

export default AddTodo;
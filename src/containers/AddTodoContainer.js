import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo.js'
import { setTodoText,addTodo,fetchTodos } from '../actions/index.js';
// import {getText} from '../selectors/index.js'


//注意这里拿的state是全局的
const mapStateToProps = state=>({
    text:state.text
})

const mapDispatchToProps = dispatch=>({
    setTodoText:text=>dispatch(setTodoText(text)),
    addTodo:text=>{
        if(text=='') return
        dispatch(setTodoText(''))
        dispatch(addTodo(text))
    },
    fetchFromApi:()=>{
        dispatch(fetchTodos())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo)
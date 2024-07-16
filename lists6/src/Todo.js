import { useState } from "react";
import TodoItem from "./TodoItem";

function Todo(props){

    // const TodoItems=props.TodoLists.map((todoooo)=><li>{todoooo}</li>)

    // const TodoItems=props.TodoLists.map((todoooo)=><TodoItem key={todoooo.id} todo={todoooo}/>);  //2
    // return <ul>{TodoItems}</ul>

    const [todoItems, setTodoItems]=useState([{data:'todo1', id:'123'}, {data:'todo2', id:'134'}]);
    const [inputText, setInputText]=useState("");

    function deleteTodo(id){
        let remainingTodos=todoItems.filter((todo)=>todo.id !== id);
        setTodoItems(remainingTodos);
    }

    function editTodo(id, newTodo){
        let UpdateTodos=todoItems.map((todo)=>{
            if(todo.id===id)
                todo.data=newTodo;
            return todo;
            
        })
        setTodoItems(UpdateTodos);
    }

    return(
        <>
            <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)}></input>

            <button onClick={()=>setTodoItems([...todoItems, {data: inputText, id:(new Date()).getTime()}])}>
                Add Todo</button>

            <ul>{todoItems.map((todo)=>
                    <TodoItem 
                        todo={todo} 
                        key={todo.id} 
                        delete={()=>deleteTodo(todo.id)}
                        edit={(newTodo)=>editTodo(todo.id, newTodo)}
                    />)}
            </ul>
        </>
    )
}

export default Todo;
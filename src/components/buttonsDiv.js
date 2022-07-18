// import { useContext } from "react"
// import { ListContext } from "../App"

import { ButtonsDivStyled } from "./styles/ButtonsDiv.styled"
export default function ButtonsDiv( { todo, todoList, changeTodo, handleDelete }){
    // const { handleDelete } = useContext(ListContext)

    return (
        <ButtonsDivStyled>
            {!todo.completed && (<button onClick={(e)=>{ //If task is not completed render this button
                e.preventDefault()
                todo.completed= !todo.completed //Change button to checked
                const newTodoList = todoList
                localStorage.setItem("newTodoList", JSON.stringify(newTodoList))
                const newTodoList2 = JSON.parse(localStorage.getItem("newTodoList"))
                changeTodo(newTodoList2)}} type="button"><img src="./images/nocheck.jpg" alt=""/></button>)}
            
            
            {todo.completed && (<button onClick={(e)=>{ //If task is completed render this button
                e.preventDefault()
                todo.completed= !todo.completed //Change button to no checked
                const newTodoList = todoList
                localStorage.setItem("newTodoList", JSON.stringify(newTodoList))
                const newTodoList2 = JSON.parse(localStorage.getItem("newTodoList"))
                changeTodo(newTodoList2)}} type="button"><img src="./images/check.jpg" alt=""/></button>)}
            
            <button type="button" onClick={()=>{
                handleDelete(todo)
            }}><img src="./images/deletebutton.png" alt=""/></button>
            
            

        </ButtonsDivStyled>
    )
}
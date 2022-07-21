import { TaskStyled } from "./styles/task.styled"
import ButtonsDiv from "./buttonsDiv"
export default function Task({ todo, todoList, changeTodo, handleDelete}){
    return (    
        <TaskStyled >
           <p style={{color: 'black'}}>{todo.task}</p>
           <ButtonsDiv todo={todo} todoList={todoList} changeTodo={changeTodo} handleDelete={handleDelete}/>

        </TaskStyled>

    )
}
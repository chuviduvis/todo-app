import { ContentStyled } from "./styles/content.styled"

import Task from "./task"
export default function Content({ todoList, changeTodo, handleDelete}){
    return (
        <ContentStyled>
          {todoList.map((todo, index) =>{
            return(
            <Task todo={todo} key={index} todoList={todoList} changeTodo={changeTodo} handleDelete={handleDelete}/> )
          })}
        </ContentStyled>
 
    )
}
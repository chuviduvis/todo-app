import { TaskStyled } from "./styles/task.styled"
import ButtonsDiv from "./buttonsDiv"
export default function Task({ contenido}){
    return (    
        <TaskStyled >
            <p>{contenido}</p>
            <ButtonsDiv />

        </TaskStyled>

    )
}
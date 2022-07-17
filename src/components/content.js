import { ContentStyled } from "./styles/content.styled"

import Task from "./task"
export default function Content(){
    return (
        <ContentStyled>
            <Task contenido ={'Hola amigos de youtube bienveniduos xd'}/>
            <Task contenido ={'Otro contenido'}/>
            <Task contenido ={'Mas contenido'} />

        </ContentStyled>
 
    )
}
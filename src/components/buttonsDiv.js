import { ButtonsDivStyled } from "./styles/ButtonsDiv.styled"
export default function ButtonsDiv(){

    return (
        <ButtonsDivStyled>
            <button type="button"><img src="./images/nocheck.jpg" alt=""/></button>
            <button type="button"><img src="./images/deletebutton.png" alt=""/></button>
            {/* <input type="image" src={x}  height="80" width="170" alt=""/>  */}
            

        </ButtonsDivStyled>
    )
}
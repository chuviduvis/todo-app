
import { useContext } from "react"
import { ListContext } from "../App"
import { InputButtonStyled } from "./styles/input.button.styled"
export default function InputButton(){
    const { handleSubmit } = useContext(ListContext)
   
    return (
        <InputButtonStyled onClick={handleSubmit}>
            {'Add'}
        </InputButtonStyled>
    )
}
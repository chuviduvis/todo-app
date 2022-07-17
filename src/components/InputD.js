import { InputDstyled } from "./styles/inputd.styled"
import InputButton from "./input.button"
import { WrapperInputStyled } from "./styles/wrapper.input.styled"
export default function InputD(){
    return (
        <WrapperInputStyled>
            <InputDstyled  type="text" placeholder="Write the task" />
            <InputButton/>
        </WrapperInputStyled>
       
        
        
    )
}
import  { StyledInput }  from './styles/input.styled'
import { Container } from "./styles/container.styled"
import InputD from "./InputD"
export default function Input({ SetInput, InputState}){
    return (
        <StyledInput>
            <Container> 
                <InputD SetInput={SetInput} InputState={InputState}/>
            </Container>
        </StyledInput>

    )
}
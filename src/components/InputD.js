import { useRef, useEffect } from "react";
import { InputDstyled } from "./styles/inputd.styled"
import InputButton from "./input.button"
import { WrapperInputStyled } from "./styles/wrapper.input.styled"
export default function InputD({ SetInput, InputState }){
    const refContainer = useRef(null);
    useEffect(()=>{
        refContainer.current.focus()

    }, [])
    
    
    return (
        <WrapperInputStyled>
            <InputDstyled  type="text" ref={refContainer} value={InputState} placeholder="Write the task" onChange={(e)=>{
                e.preventDefault()
                SetInput(e.target.value)
                
            }} />
            <InputButton/>
        </WrapperInputStyled>
       
        
        
    )
}
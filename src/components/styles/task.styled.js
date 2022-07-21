import styled from "styled-components";

export const TaskStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    margin-bottom: 5px;
    flex-wrap: wrap;
 
    @media(max-width: ${({ theme })=> theme.mobile}){
        flex-wrap: wrap;
    
    }


`
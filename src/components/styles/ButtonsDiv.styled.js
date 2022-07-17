import styled from "styled-components";
export const  ButtonsDivStyled = styled.div`
    background-color: pink;
    display: flex;
    align-items: center;
    margin-right: 20px;
    button {
        height: 30px;
        width: 30px;
        border: 1px solid #fff;
        border-radius: 10%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decorator: none;
        cursor: pointer;
        &:hover {
            opacity: 0.9;
            transform: scale(0.90);
        }
        margin-right: 15px;
      
    }
   


 
    img {
        height: 30px;
        width: 30px;
    } 

`
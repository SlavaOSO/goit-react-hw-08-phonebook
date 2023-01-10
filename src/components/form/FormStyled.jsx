import styled from "@emotion/styled";

export const FormBox = styled.div`
// padding: 16px;
width: 300px;
display: flex;
flex-direction: column;
`;

export const ButtonAdd = styled.button`
margin-top: 16px;
min-width: 200px;
height: 40px;
font-size: 20px;
background-color: rgba(33, 150, 243, 1);
color: #ffffff;
border-radius: 8px;   
border: 0;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
transition-property: background;
transition-duration: 250ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);


&:hover,
&:focus {
    background-color: rgba(24, 140, 232, 1);
 }
`;

export const LabelBox = styled.label`
font-size: 24px;
`;

export const InputBox = styled.input`
min-width: 240px;
margin: 0;
padding: 12px 15px 12px 42px;
font-size: 14px;
color: inherit;
border: 1px solid;
border-color: rgba(33, 33, 33, 0.2);
border-radius: 4px;
outline: transparent;


&:hover,
&:focus-within {
border-color: blue;
}
`;
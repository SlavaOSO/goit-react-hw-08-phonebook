import styled from "@emotion/styled";

export const Div = styled.div`
text-align: center;
width: 400px;
margin-left: auto;
margin-right: auto; 
`;

export const Title = styled.h1`
color: #343545;
font-size: 32px;
line-height: 1.17;
letter-spacing: 0.01em;
`;

export const ErrorText = styled.p`
font-size: 24px;
font-weight: 700;
color: red;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
width: 360px;
padding: 16px;
font-size: 16px;
line-height: 1.17;
letter-spacing: 0.01em;
border: 2px solid rgba(33, 33, 33, 0.2);
border-radius: 8px;
`;

export const Label = styled.label`
font-size: 18px;
line-height: 1.17;
letter-spacing: 0.01em;
`

export const Input = styled.input`
min-width: 300px;
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

export const Button = styled.button`
   
    display: inline-block;
    padding: 10px 5px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 16px;
    min-width: 151px;
   
  
    border-radius: 8px;   
    border: 0;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);

   
   font-weight: 700;
   font-size: 16px;
   line-height: 1.17;
   letter-spacing: 0.06em;
   text-align: center;

   background-color: rgba(33, 150, 243, 1);
   color: rgba(255, 255, 255, 1);
   cursor: pointer;

   transition-property: background;
   transition-duration: 250ms;
   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);


   &:hover,
   &:focus {
       background-color: rgba(24, 140, 232, 1);
       color: inherit;
    }

`;
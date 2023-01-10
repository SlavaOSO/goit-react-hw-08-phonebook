import styled from "@emotion/styled";

export const LabelBox = styled.label`
font-size: 24px;
font-weight: 700;
line-height: 1.17;
letter-spacing: 0.01em;
color: inherit;
`;

export const InputBox = styled.input`
min-width: 240px;
margin: 0;
margin-left: 8px;
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
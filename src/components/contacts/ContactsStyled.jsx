import styled from '@emotion/styled';

export const DivContainer = styled.div`
width: 1200px;
margin-left: auto;
margin-right: auto;
padding-top: 24px;
`

export const SecondaryTitleBox = styled.h2`
margin: 0px;
margin-bottom: 8px;
margin-top: 8px;
font-size: 24px;
color: inherit;
`;

export const ListContacts = styled.ul`
margin: 0px;
list-style: none;
padding: 0px;
`;

export const ButtonDel = styled.button`
min-width: 100px;
margin-left: 16px;
display: inline-block;
padding: 5px 5px;

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
   background-color: red;
   color: inherit;
}
`;

export const ListItem = styled.li`
margin-bottom: 8px;
font-size: 20px;
color: inherit;

`
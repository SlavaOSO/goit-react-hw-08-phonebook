import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid';
import { login } from 'redux/operations';
import { getErrorAuth } from "redux/selectors";
import { Form, Input, Button, Label, Div, Title, ErrorText } from "./LoginFormStyled";


export default function LoginForm() {
    const dispatch = useDispatch();
    const isError = useSelector(getErrorAuth)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const emailInputId = nanoid();
    const passwordInputId = nanoid();

    
    const handleInputChange = (e) => {
        const {name, value} = e.target;  
        
        switch(name) {
          case "email":
            return setEmail(value); 
          case "password":
            return setPassword(value); 
          default:
          return;
        }
      };

 

    const handleSubmit = (e) => {
        e.preventDefault();        
        dispatch(login({email, password}));
        setEmail('');
        setPassword('');
    };



    return(

        <Div>
             <Title>Please log in </Title>
            {isError && <ErrorText>Oops, something went wrong, try again!</ErrorText>}
            <Form onSubmit={handleSubmit}>
                <Label>Email
                    <Input
                      type="email"
                      name="email"
                      title="For example user@mail.com"
                      required
                      onChange={handleInputChange}
                      value={email}    
                      id={emailInputId}   
                      placeholder="user@mail.com"        
                    /> 
                </Label>
          
                <Label>Password
                    <Input
                      type="password"
                      name="password"
                      required
                      onChange={handleInputChange}
                      value={password}  
                      id={passwordInputId}  
                      placeholder="Password"
                    />  
                </Label>
              <Button type="submit">Login</Button>
            </Form>
        </Div>

    )
}
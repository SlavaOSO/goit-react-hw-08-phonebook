import { List, ListItem, LinkStyled, DivContainer } from "./AuthNavStyled";

    
export default function AuthNav() {
    return(
        <DivContainer>
            <List>
                <ListItem>
                    <LinkStyled to="/login">
                        {/* <Button type='button'>Login</Button> */}
                        Login
                    </LinkStyled>
                </ListItem>
                <ListItem>
                    <LinkStyled to="/register">
                        {/* <Button type='button'>Register</Button> */}
                        Register
                    </LinkStyled> 
                </ListItem>
            </List>
        </DivContainer>
    )
};
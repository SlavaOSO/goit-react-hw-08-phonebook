import { useLocation } from 'react-router-dom';
import { Nav, NavList, ListItem, LinkStyled } from "./NavigationStyled"

export default function Navigation() {
    const location = useLocation();
    const backHrefLink = location.state?.from ?? '/';
    return(        
            
        <Nav>
            <NavList>
                <ListItem>
                    <LinkStyled to={backHrefLink}>
                        {/* <Button type='button'>Home</Button> */}
                        Home
                    </LinkStyled>
                </ListItem>

                <ListItem>
                    <LinkStyled to="/contacts">
                        {/* <Button type='button'>Contacts</Button> */}
                        Contacts
                    </LinkStyled>
                </ListItem>

               
            </NavList>
        </Nav>    
        

    )
};
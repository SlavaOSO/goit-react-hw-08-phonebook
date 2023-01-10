import { useDispatch, useSelector } from "react-redux";
import { DivBox, Button, Mail } from "./UserMenuStyled";
import { getUserEmail } from '../../redux/selectors';
import { logout } from "redux/operations";


export default function UserMenu() {
    const dispatch = useDispatch();
    const email = useSelector(getUserEmail)



    return(
        <DivBox>
            <Mail>{email}</Mail>
            <Button type="button" onClick={() => dispatch(logout())}>Logout</Button>
        </DivBox>
    )
};
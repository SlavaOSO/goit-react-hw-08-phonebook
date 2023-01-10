import { Outlet } from "react-router-dom";
import Contacts from "components/contacts/Contacts";

export default function ContactsPage() {
    return(
        <div>
            {<Contacts/>}
            <Outlet/>
        </div>
    )
};
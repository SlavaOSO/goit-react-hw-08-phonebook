import { Outlet } from "react-router-dom";
import HomePage from "../../components/homePage/HomePage";

export default function LoginPage() {
    return(
        <div>
            {<HomePage/>}
            <Outlet/>
        </div>
    )
};
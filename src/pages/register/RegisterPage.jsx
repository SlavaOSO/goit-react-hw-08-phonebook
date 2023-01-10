import { Outlet } from "react-router-dom";
import RegisterForm from '../../components/register/RegisterForm';


export default function RegisterPage() {
    return(
        <div>
          {<RegisterForm/>}
          <Outlet/>
        </div>
      
    )
};
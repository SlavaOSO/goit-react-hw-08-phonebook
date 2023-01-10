import { useSelector } from 'react-redux';
import { Navigate, Outlet} from 'react-router-dom';
import { getIsLoged } from '../redux/selectors';



export default function PrivateRoute() {
    const isLoged = useSelector(getIsLoged);
  
    if (!isLoged) {
        return <Navigate to='/login'/>
    }
    return <Outlet />
}
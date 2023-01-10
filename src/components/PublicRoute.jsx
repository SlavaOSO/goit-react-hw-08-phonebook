import { useSelector } from 'react-redux';
import { Navigate, Outlet} from 'react-router-dom';
import { getIsLoged } from '../redux/selectors';



export default function PublicRoute() {
    const isLoged = useSelector(getIsLoged);

  
    if (isLoged) {
        return <Navigate to='/contacts'/>
    }
    return <Outlet />
}
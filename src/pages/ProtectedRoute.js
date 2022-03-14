
import { Navigate  } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'



function ProtectedRoute({ children, admin }) {
    
    const { loggedIn, user } = useAuth();

    if(admin && user.role !== "admin"){
        return <Navigate to="/" replace />;
    }
    
    if(loggedIn){
        return children;
    }else{
        return <Navigate to="/" replace />;
    }

      
}

export default ProtectedRoute
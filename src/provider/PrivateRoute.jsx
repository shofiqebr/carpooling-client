

import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

   
    if (loading) return <div className="text-5xl">
    <img src="https://i.ibb.co/dcM4bB0/yellow-chrome-blink-home.gifhttps://i.ibb.co/sWt68JD/icegif-1260.gif" alt="" />
    </div>
        
    if (!user?.email) {
        return <Navigate state={location.pathname} to='/login' />
    }



    return children;
};

export default PrivateRoute;




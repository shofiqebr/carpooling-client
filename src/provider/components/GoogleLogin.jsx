
// import { useContext } from 'react';
// import { AuthContext } from './../../authProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../AuthProvider';

const GoogleLogin = () => {

const {googleLogin} = useContext(AuthContext);

const handleGoogleLogin = (media) =>{
    media()
    .then(res => {
        toast.success('User logged in successfully');
        Navigate('/')
    })
    .catch(error => {
        toast.error(error.message)
    })
}

    return (
        <div>
            <button 
            onClick={()=>handleGoogleLogin(googleLogin)}
            className="btn btn-neutral btn-sm">Google Login</button>
        </div>
    );
};

export default GoogleLogin;
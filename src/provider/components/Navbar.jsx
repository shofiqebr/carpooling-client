import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from './../AuthProvider';


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

    return (
        <div>
            <div className="navbar bg-sky-950 rounded-md text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-success lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow  bg-slate-500 rounded-box w-52">
        <li> <Link to='/'>Home</Link></li>
        <li>
        <Link to={'/dashboard'}>Dashboard</Link>
          <ul className="p-2">
          <li>  <Link to='/myservices'>My-services</Link></li>
            <li>  <Link to='/addservices'>Add-services</Link></li>
            <li>  <Link to='/myshedules'>My-shedules</Link></li>
          </ul>
        </li>
        <li>   <Link to='/service'>Service</Link></li>
        <li>   <Link to='/register'>Register</Link></li>
      </ul>
    </div>
    <a className="btn btn-success normal-case text-xl">
      <img className="w-16 rounded-full" src="https://i.ibb.co/svLzghr/pngimg-com-car-logo-PNG1641.png" alt="" />
      Ride Solution
      </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link to='/'>Home</Link>
      </li>

      {user && 
        <li tabIndex={0}>
        <details>
          <summary>
            <Link to={'/dashboard'}>Dashboard</Link>
          </summary>
          <ul className="p-2 z-10 text-black">
            <li>  <Link to='/myservices'>My-services</Link></li>
            <li>  <Link to='/addservices'>Add-services</Link></li>
            <li>  <Link to='/myshedules'>My-shedules</Link></li>
           
          </ul>
        </details>
      </li>
      }
    
      <li>
        <Link to='/service'>Service</Link>
       
      </li>
      <li>
      <Link to='/register'>Register</Link>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
  {user?.email ? (
            <div className="hidden lg:flex justify-center items-center">
              <div>{user.displayName}</div>
              <div><img className="avatar btn-circle m-5" src={user.photoURL} alt="" /></div>
              <div>
                <button className="btn btn-sm btn-success" onClick={logOut}>Logout</button>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm btn-ghost">Login</button>
            </Link>
          )}
  </div>
</div>
        </div>
    );
};

export default Navbar;
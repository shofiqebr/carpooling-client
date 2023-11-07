import { Link } from "react-router-dom";
import Navbar from "../provider/components/Navbar";


const NotFound = () => {
    return (
       
        <div className="mx-auto">
             <Navbar></Navbar>
            <img className="h-[50vh] mx-auto my-10" src="https://i.ibb.co/V3zhZxQ/404-page-not-found-illustration-2048x1525-klhjkkii.png" alt="" />
          
            <Link to={'/'}>
            
            <div className="grid place-items-end px-10">
                <img className="h-[20vh]" src="https://i.ibb.co/dcM4bB0/yellow-chrome-blink-home.gif" alt="" />
            </div>
            </Link>
        </div>
    );
};

export default NotFound;
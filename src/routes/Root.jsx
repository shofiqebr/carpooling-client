import { Outlet } from "react-router-dom";
import Navbar from "../provider/components/Navbar";
import Footer from "../pages/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;


// #8e44ad

// #A563C1
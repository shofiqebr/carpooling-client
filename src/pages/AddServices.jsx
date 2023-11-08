import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";


const AddServices = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
             <Helmet>
      <title>Add Services</title>
      </Helmet>
            <form  className="grid grid-cols-2 gap-5 m-5">
            <input className="input input-bordered" type="text" placeholder="photurl" />
            <input className="input input-bordered" type="text" placeholder="service name" />
            <input className="input input-bordered" type="text" value={user.displayName} readOnly />
            <input className="input input-bordered" type="text" value={user.email} readOnly/>
            <input className="input input-bordered" type="text" placeholder="service price" />
            <input className="input input-bordered" type="text" placeholder="service area" />
            <input className="input input-bordered" type="text" placeholder="service description" />
            </form>
            <div className="btn ">Add button</div>
        </div>
    );
};

export default AddServices;
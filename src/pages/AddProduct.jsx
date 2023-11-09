import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";


const AddProduct = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
             <Helmet>
      <title>Add Product</title>
      </Helmet>
            <form  className="grid grid-cols-2 gap-5 m-5">
            <input className="input input-bordered" type="text" name="serviceImage" placeholder="photurl" />
            <input className="input input-bordered" type="text" name="serviceName" placeholder="service name" />
            <input className="input input-bordered" type="text" value={user.displayName} readOnly />
            <input className="input input-bordered" type="text" value={user.email} readOnly/>
            <input className="input input-bordered" type="text"  name="servicePrice" placeholder="service price" />
            <input className="input input-bordered" type="text"  name="serviceArea" placeholder="service area" />
            <input className="input input-bordered" type="text" name="serviceDescription" placeholder="service description" />
            <button type="submit" className="btn btn-success ">Add button</button>
            </form>
        </div>
    );
};

export default AddProduct;
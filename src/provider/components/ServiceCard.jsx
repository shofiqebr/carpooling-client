import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

const ServiceCard = ({service}) => {
    const { _id, serviceImage, serviceName, serviceDescription,servicePrice, } = service;
    const {user} = useContext(AuthContext);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={serviceImage}
            className="w-96 h-80 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{serviceName}</h1>
            <p className="py-6">
             {serviceDescription}
            </p>
            <p>service provider</p>
            <div className="flex items-center">
            <img className="avatar btn-circle m-5" src={user.photoURL} alt="" />
            <p>{user.displayName}</p>
            </div>
            <button className="btn btn-primary">View Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

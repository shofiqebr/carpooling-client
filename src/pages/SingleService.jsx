import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const SingleService = () => {
    const {user} = useContext(AuthContext);
  const service = useLoaderData();
  const {
    _id,
    serviceImage,
    serviceName,
    serviceDescription,
    servicePrice,
    serviceArea,
  } = service;

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  flex-col lg:flex-row-reverse">

          <div className="w-[300px]">
            <div>Service provider</div>
          <img
            src={user.photoURL}
            className="w-[300px] rounded-lg shadow-2xl"
          />
          <div>
            {user.displayName} <br />
            {serviceArea}

          </div>

          </div>
          <div>
    <img className="h-64 w-80" src={serviceImage} alt="" />
            <h1 className="text-5xl font-bold">{serviceName}</h1>
            <p className="">
              {serviceDescription}
            </p>
            <p className="py-6">
              {servicePrice}
            </p>
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;

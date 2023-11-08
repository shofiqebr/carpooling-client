
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

const AllServiceCard = ({service}) => {
    const { _id, serviceImage, serviceName, serviceDescription,servicePrice,serviceArea } = service;
    const {user} = useContext(AuthContext);
   

    // const toggleShowAll = () => {
    //   setShowAll(!showAll);
    // };
  return (
    <div>
      <div className="card card-compact w-[700px] bg-base-100 shadow-xl">
        <figure>
          <img className="w-full"
            src={serviceImage}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{serviceName}</h2>
          <p>{serviceDescription}</p>
          <div className=" justify-end">
         
            <div>service provider</div>
            <div className="">
            <img className="avatar btn-circle m-5" src={user.photoURL} alt="" />
            <div>{user.displayName}</div>
          </div>
            <div>service area {serviceArea}</div>
            <div>service price {servicePrice}</div>
          <button className="btn btn-primary w-full">View detail</button>
        </div>
      </div>
    </div>
{/* 
    {service.length > 6 && (
        <button className="btn btn-info m-3" onClick={toggleShowAll}>
          {showAll ? "Show Less" : "See All"}
        </button>
      )} */}
    </div>
  );
};

export default AllServiceCard;

// import { useContext } from 'react';

// import { AuthContext } from '../AuthProvider';

const ManageServiceCard = ({ service }) => {
  const { _id, serviceImage, serviceName, serviceDescription, servicePrice } =
    service;
  // const {user} = useContext(AuthContext);
  return (
    <div className="pl-40">
      <div className="card flex flex-row bg-base-100 shadow-xl">
        <div className="flex flex-col">

        <figure>
          <img className="w-96 h-80"
            src={serviceImage}
            alt="Movie"
          />
        </figure>
        {serviceName}
        </div>
        <div className="card-body pt-20 pr-40">
        
          <div className="card-actions justify-center">
            <button className="btn w-36 btn-success">Edit</button>
          </div>
          <div className="card-actions justify-center">
            <button className="btn w-36 btn-success">Delete</button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ManageServiceCard;

import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const SingleService = () => {
  const { user } = useContext(AuthContext);
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
            <p className="">{serviceDescription}</p>
            <p className="py-6">{servicePrice}</p>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Book Now
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <input
                  className="input input-bordered"
                  type="text"
                  value={serviceName}
                  readOnly
                />
                <input
                  className="input input-bordered"
                  type="text"
                  value={serviceImage}
                  readOnly
                />
                <input
                  className="input input-bordered"
                  type="text"
                  value={user.email}
                  readOnly
                />
                <input
                  className="input input-bordered"
                  type="text"
                  placeholder="service taking date"
                  
                />
                <input
                  className="input input-bordered"
                  type="text"
                  placeholder="special instruction"
                />
                <input
                  className="input input-bordered"
                  type="text"
                  value={servicePrice}
                  readOnly
                />
               <button className="btn">purchase now</button>
               
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;

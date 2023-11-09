import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const SingleService = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  
  const {
    serviceImage,
    serviceName,
    serviceDescription,
    servicePrice,
    serviceArea,
  } = service;
  const handleAddService= (event)=>{
    event.preventDefault();
    // console.log("Handle Add Service called");
    const form = event.target;

    const serviceName  = form.serviceName.value;
    const serviceImage = form.serviceImage.value;
    const email = form.email.value;
    const date = form.date.value;
    const specialInstruction = form.specialInstruction.value;
    const servicePrice = form.servicePrice.value;
    
    // console.log("Service Name:", serviceName);
    // console.log("Service Image:", serviceImage);
    // console.log("Email:", email);
    // console.log("Date:", date);
    // console.log("Special Instruction:", specialInstruction);
    // console.log("Service Price:", servicePrice);

    const service = { serviceName,serviceImage,email,date,specialInstruction,servicePrice}

    console.log(service);



  fetch('https://carpooling-and-ride-sharing-service-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Service Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
          };



  return (
    <div>
         <Helmet>
      <title>Single services</title>
      </Helmet>
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
                <form onSubmit={handleAddService} >
                <input
                  className="input input-bordered"
                  type="text"
                  name="serviceName"
                  value={serviceName}
                  readOnly
                />
                <input
                  className="input input-bordered"
                  name="serviceImage"
                  type="text"
                  value={serviceImage}
                  readOnly
                />
                <input
                  className="input input-bordered"
                  name="email"
                  type="text"
                  value={user.email}
                  readOnly
                />
                <input
                  className="input input-bordered"
                  name="date"
                  type="date"
                  placeholder="service taking date"
                  
                />
                <input
                  className="input input-bordered"
                  name="specialInstruction"
                  type="text"
                  placeholder="special instruction"
                />
                <input
                  className="input input-bordered"
                  name="servicePrice"
                  type="text"
                  value={servicePrice}
                  readOnly
                />
              
               <button type="submit" className="btn">purchase now</button>
               </form>
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

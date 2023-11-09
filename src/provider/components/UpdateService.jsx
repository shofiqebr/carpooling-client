import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider";


const UpdateService = () => {
const service = useLoaderData();
const {user} = useContext(AuthContext)
const { _id, serviceImage, serviceName,serviceArea, serviceDescription,servicePrice, } = service;



const handleUpdateService= (event)=>{
    event.preventDefault();
    console.log("Handle Add Service called");
    const form = event.target;
  //   console.log("Form:", form);
  //   console.log("Service Name:", form.serviceName);

    const serviceName = form.serviceName.value;
    const serviceDescription = form.serviceDescription.value;
    const serviceArea = form.serviceArea.value;
    const serviceImage = form.serviceImage.value;
    const servicePrice = form.servicePrice.value;
    const service = { serviceName,serviceImage,servicePrice,serviceArea,serviceDescription}

    // console.log(service);



//   fetch(`https://carpooling-and-ride-sharing-service-server.vercel.app/services/${_id}`, {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(service)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if(data.insertedId){
//                     Swal.fire({
//                         title: 'Success!',
//                         text: 'Service updated Successfully',
//                         icon: 'success',
//                         confirmButtonText: 'Cool'
//                       })
//                 }
//             })
//           };

fetch(`https://carpooling-and-ride-sharing-service-server.vercel.app/service/${_id}`, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify(service),
})
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        if (data.insertedId) {
            Swal.fire({
                title: 'Success!',
                text: 'Service updated Successfully',
                icon: 'success',
                confirmButtonText: 'Cool',
            });
        }
    })
    .catch((error) => {
        console.error('Error updating service:', error);
    });

};

    return (
        <div>
             <Helmet>
      <title>Add Product</title>
      </Helmet>
          
            <form onSubmit={handleUpdateService} className="grid grid-cols-2 gap-5 m-5">
  <input className="input input-bordered" type="text" defaultValue={serviceImage} name="serviceImage" placeholder="photurl" />
  <input className="input input-bordered" type="text" defaultValue={serviceName} name="serviceName" placeholder="service name" />
  
  
  <input className="input input-bordered" type="text" defaultValue={servicePrice}  name="servicePrice" placeholder="service price" />
  <input className="input input-bordered" type="text" defaultValue={serviceArea}  name="serviceArea" placeholder="service area" />
  <input className="input input-bordered" type="text" defaultValue={serviceDescription} name="serviceDescription" placeholder="service description" />
  <button type="submit" className="btn btn-success">update service</button>
</form>

        </div>
)};

export default UpdateService;
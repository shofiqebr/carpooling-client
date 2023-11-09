import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";



const AddProduct = () => {
    const {user} = useContext(AuthContext)
   
    const handleAddService= (event)=>{
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
      <title>Add Product</title>
      </Helmet>
          
            <form onSubmit={handleAddService} className="grid grid-cols-2 gap-5 m-5">
  <input className="input input-bordered" type="text" name="serviceImage" placeholder="photurl" />
  <input className="input input-bordered" type="text" name="serviceName" placeholder="service name" />
  <input className="input input-bordered" type="text" value={user.displayName} readOnly />
  <input className="input input-bordered" type="text" value={user.email} readOnly/>
  <input className="input input-bordered" type="text" name="servicePrice" placeholder="service price" />
  <input className="input input-bordered" type="text" name="serviceArea" placeholder="service area" />
  <input className="input input-bordered" type="text" name="serviceDescription" placeholder="service description" />
  <button type="submit" className="btn btn-success">Add button</button>
</form>

        </div>
    );
};

export default AddProduct;
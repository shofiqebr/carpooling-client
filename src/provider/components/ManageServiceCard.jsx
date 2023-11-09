// import { useContext } from 'react';

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// import { AuthContext } from '../AuthProvider';

const ManageServiceCard = ({ service,services,setServices }) => {
  const { _id, serviceImage, serviceName, serviceDescription, servicePrice } =
    service;
  // const {user} = useContext(AuthContext);

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {


            fetch(`https://carpooling-and-ride-sharing-service-server.vercel.app/services/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your service has been deleted.',
                            'success'
                        )
                        const remaining = services.filter(cof => cof._id !== _id);
                        setServices(remaining);
                    }
                })

        }
    })
}

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
            <button onClick={handleDelete} className="btn w-36 btn-success">Delete</button>
          </div>
          <div className="card-actions justify-center">
           
          <Link to={`/updateService/${_id}`}>
  <button className="btn w-36 btn-success">Edit</button>
</Link>
{/* This should resolve the issue, and clicking the "Edit" button should now navigate to the correct update service page. */}






          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ManageServiceCard;

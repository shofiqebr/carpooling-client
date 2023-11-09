// import { useEffect, useState } from "react";
import ManageServiceCard from "../provider/components/ManageServiceCard";
// import Service from './Service';
import { useLoaderData } from "react-router-dom";

const ManageService = () => {

    const services = useLoaderData()
    
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     fetch("https://carpooling-and-ride-sharing-service-server.vercel.app/services")
//       .then((res) => res.json())
//       .then((data) => setServices(data));
//   }, []);

    return (
        <div>{services.length}
              {services.map((service) => (
        <ManageServiceCard key={service._id} service={service}></ManageServiceCard>
      ))}
        </div>
    );
};

export default ManageService;
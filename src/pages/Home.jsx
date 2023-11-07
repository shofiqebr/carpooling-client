import { useEffect, useState } from "react";
import ServiceCard from "../provider/components/ServiceCard";
import { Link } from "react-router-dom";
import ContactInfo from "../provider/components/ContactInfo";
import Benifits from "../provider/components/Benifits";


const Home = () => {
  const bannerStyle = {
    background: `url('https://i.ibb.co/k0t9RCT/carpooling-benefits.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    width: "100%",
    height: "90vh",
  };

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
    <div className="grid sticky left-0 top-[40vh] bg-blue-900 gap-5 w-10">
        <ContactInfo></ContactInfo>
    </div>

   

      <div style={bannerStyle} className="flex text-9xl text-g">
      
      </div>


        <Benifits></Benifits>




      <div className="text-center text-5xl font-extrabold py-5">
        Our Most Popular services
      </div>

      {services.slice(0, 4).map((service) => (
        <ServiceCard key={service._id} service={service}></ServiceCard>
      ))}

      <div className="flex justify-center items-center my-5">
        <Link to={"/allservices"}>
          <button className="btn btn-outline btn-accent">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

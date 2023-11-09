import { useEffect, useState } from "react";
import ServiceCard from "../provider/components/ServiceCard";
import { Link } from "react-router-dom";
import ContactInfo from "../provider/components/ContactInfo";
import Benifits from "../provider/components/Benifits";
import test from "./test.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";


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
    fetch("https://carpooling-and-ride-sharing-service-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    
    <div >
      <Helmet>
      <title>Home</title>
      </Helmet>
  
   

      <div style={bannerStyle} className="flex text-9xl">
      
      </div>


      <div className="grid sticky rounded-md p-2 left-0 top-[40vh] bg-blue-900 z-10 gap-1 w-10">
        <ContactInfo></ContactInfo>
    </div>


        <Benifits></Benifits>



        <div className="text-center text-5xl font-extrabold py-5 mt-10">
        Test our regular package service
      </div>
        <div >

        <Lottie className="h-[80vh]" animationData={test} loop={true} />
        </div>




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

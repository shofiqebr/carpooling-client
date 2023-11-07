import { useEffect, useState } from "react";
import ServiceCard from "../provider/components/ServiceCard";

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
      <div style={bannerStyle} className="flex text-9xl text-g"></div>
   

{
                    services.slice(0,4).map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }

    </div>
  );
};

export default Home;

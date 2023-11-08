import { useEffect, useState } from "react";
import AllServiceCard from "../provider/components/AllServiceCard";
import { Helmet } from "react-helmet";

const AllServices = () => {
    const [datalength, setDatalength] = useState(6);
  const [allservices, setAllServices] = useState([]);
//   const [searchItem, setSearchItem]= useState("");
  useEffect(() => {
    fetch("http://localhost:5000/allservices")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  const showAllCards = () => {
    setDatalength(allservices.length);
  };

  const showLessCards = () => {
    setDatalength(6);
  };

//   const filteredServices = allservices.filter((service)=>
//   service.serviceName.toLowerCase().includes(searchItem.toLowerCase())
//   );


  return (
    <div>
       <Helmet>
      <title>Allservices</title>
      </Helmet>
      <div className="flex justify-center items-center p-2">
        <div className="form-control ">
          <div className="input-group ">
            <input
              type="text"
              placeholder="Search…"
              className="input w-[700px] input-bordered"
            //   value={searchItem}
            //   onChange={(e) => setSearchItem(e.target.value)}
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 justify-center items-center ">

      {allservices.slice(0,datalength).map((service) => (
        <AllServiceCard key={service._id} service={service}></AllServiceCard>
      ))}
      </div>
      <div className="text-center m-5">

      {datalength < allservices.length && (
        <div>
          <button onClick={showAllCards} className="btn btn-info">
            Show All
          </button>
        </div>
      )}
      {datalength === allservices.length && (
        <div>
          <button onClick={showLessCards} className="btn btn-info">
            Show Less
          </button>
        </div>
      )}
      </div>
      
 </div>
  );
};

export default AllServices;

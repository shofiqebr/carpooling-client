import { Typewriter } from "react-simple-typewriter";


const Benifits = () => {
    return (
        <div>
                  <p className="text-center text-5xl font-extrabold py-5">
                  <span style={{ color: 'red', fontWeight: 'bold', fontSize:'40px' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Cost Savings', 'Reduced Traffic Congestion', 'Environmental Benefits', 'Energy Efficiency']}
            loop={20}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
        </span>
      </p>
      <div className="px-20" >
      Cost Savings: Sharing rides or carpooling can significantly reduce transportation costs. Participants can share fuel expenses, tolls, and parking fees, making it more economical for everyone involved. <br />

Reduced Traffic Congestion: Carpooling and ride sharing reduce the number of single-occupancy vehicles on the road, leading to less traffic congestion. This can result in shorter commute times and a more efficient transportation system. <br />

Environmental Benefits: Fewer cars on the road mean reduced greenhouse gas emissions and air pollution. Ride sharing and carpooling contribute to a cleaner environment and help combat climate change. <br />

Energy Efficiency: Carpooling and ride sharing make more efficient use of resources, including fuel and energy. Fewer vehicles on the road mean less energy consumption per person, which is beneficial for resource conservation.
      </div>
        </div>
    );
};

export default Benifits;
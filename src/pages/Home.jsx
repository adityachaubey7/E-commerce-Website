import BestSellers from "../component/BestSellers";
import Hero from "../component/Hero";
import LatestCollection from "../component/LatestCollection";
import NewsLetter from "../component/NewsLetter";
import OurPolicy from "../component/OurPolicy";

const Home = () => {
    return (
      <div>
       <Hero/>
       <LatestCollection/>
       <BestSellers/>
       <OurPolicy/>
       <NewsLetter/>
      </div>
    );
  };
  
  export default Home;
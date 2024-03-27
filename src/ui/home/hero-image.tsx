import Image from "next/image";
import {Map} from '../map/map'
import {Grenze_Gotisch} from "next/font/google";

const grenze_gotisch = Grenze_Gotisch({ subsets: ["latin"] });

interface HeroImageProps {
    imageUrl: string;
    altText: string;
  }
  
  const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, altText }) => {
    return (
      <div className="relative p-5 flex items-center justify-center">
        <Map />
        <div className="relative inset-0 justify-center">
          <h1 className={`text-slate text-5xl font-bold ${grenze_gotisch.className} `}>Destinations<br/> in Sri Lanka</h1>
          <p className="text-slate">Explore the regions and towns around Greenland and dig deeper into the experiences in each destination.</p>
        </div>
      </div>
    );
  }
  
  export default HeroImage;
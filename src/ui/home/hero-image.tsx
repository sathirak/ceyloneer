"use client"

import Image from "next/image";
import {Map} from '../map/map'
import ProvinceCard from "./province-card";
import { useState } from "react";

interface HeroImageProps {
    imageUrl: string;
    altText: string;
  }
  
  const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, altText }) => {

    const [state, setState] = useState('Sri Lanka');

    const updateState = (newValue:string) => {
      setState(newValue);
    };

    return (
      <div className="relative p-5 flex items-center justify-center">
        <Map state={state} updateState={updateState} />
        <ProvinceCard state={state}/>
      </div>
    );
  }
  
  export default HeroImage;
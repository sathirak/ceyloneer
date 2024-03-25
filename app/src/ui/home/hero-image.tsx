import Image from "next/image";

interface HeroImageProps {
    imageUrl: string;
    altText: string;
  }
  
  const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, altText }) => {
    return (
      <div className="relative p-5">
        <Image src={imageUrl} alt={altText} className="rounded-3xl" height={900} width={900}  />
        <div className="absolute inset-0"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Welcome to My Blog</h1>
        </div>
      </div>
    );
  }
  
  export default HeroImage;
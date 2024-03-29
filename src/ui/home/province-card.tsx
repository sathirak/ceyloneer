import { Grenze_Gotisch } from "next/font/google";
import { ImageCard } from "./image-card";

interface ProvinceCardProps {
	state: string;
}

interface ProvinceData {
  title: string;
  description: string;
  quote: string;
  values: { url: string; description: string; }[];
}

export const province_data = {
  wp: {
    title: "Western Province",
    description: "Explore the regions and towns around Western Province and dig deeper into the experiences in each destination.",
    quote: "Misty hills and vibrant tea plantations charm under a temperate climate, offering spicy curries and fresh seafood delights amidst lush greenery.",
    values: [
    { url: "https://picsum.photos/200/100?random=23", description: "Explore the serene landscapes and rich cultural heritage of a hidden gem destination." },
    { url: "https://picsum.photos/200/100?random=34", description: "Indulge in the vibrant colors and flavors of a bustling local market, where every corner tells a story." },
    { url: "https://picsum.photos/200/100?random=45", description: "Embark on an unforgettable journey through ancient ruins, where the whispers of history echo in every stone." },
    { url: "https://picsum.photos/200/100?random=56", description: "Savor the tranquility of a secluded beach, where the sun-kissed shores invite you to unwind and relax." },
    { url: "https://picsum.photos/200/100?random=67", description: "Immerse yourself in the lively rhythm of a vibrant city, where every street corner holds the promise of adventure." }
    ]
  },
  cp: {
    title: "Central Province",
    description: "Explore the regions and towns around Central Province and dig deeper into the experiences in each destination.",
    quote: "Emerald landscapes and tranquil lakes flourish in a cool climate, perfect for savoring savory rice and curry delicacies amid aromatic spice gardens.",
    values: [
    { url: "https://picsum.photos/200/100?random=23", description: "Explore the serene landscapes and rich cultural heritage of a hidden gem destination." },
    { url: "https://picsum.photos/200/100?random=34", description: "Indulge in the vibrant colors and flavors of a bustling local market, where every corner tells a story." },
    { url: "https://picsum.photos/200/100?random=45", description: "Embark on an unforgettable journey through ancient ruins, where the whispers of history echo in every stone." },
    { url: "https://picsum.photos/200/100?random=56", description: "Savor the tranquility of a secluded beach, where the sun-kissed shores invite you to unwind and relax." },
    { url: "https://picsum.photos/200/100?random=67", description: "Immerse yourself in the lively rhythm of a vibrant city, where every street corner holds the promise of adventure." }
    ]
  },
  sp: {
    title: "Southern Province",
    description: "Explore the regions and towns around Southern Province and dig deeper into the experiences in each destination.",
    quote: "Palm-fringed beaches and verdant rainforests allure under a balmy weather, offering spicy ambulthiyal and tropical fruits amidst breathtaking natural beauty.",
    values: [
    { url: "https://picsum.photos/200/100?random=23", description: "Explore the serene landscapes and rich cultural heritage of a hidden gem destination." },
    { url: "https://picsum.photos/200/100?random=34", description: "Indulge in the vibrant colors and flavors of a bustling local market, where every corner tells a story." },
    { url: "https://picsum.photos/200/100?random=45", description: "Embark on an unforgettable journey through ancient ruins, where the whispers of history echo in every stone." },
    { url: "https://picsum.photos/200/100?random=56", description: "Savor the tranquility of a secluded beach, where the sun-kissed shores invite you to unwind and relax." },
    { url: "https://picsum.photos/200/100?random=67", description: "Immerse yourself in the lively rhythm of a vibrant city, where every street corner holds the promise of adventure." }
    ]
  },
  ep: {
    title: "Eastern Province",
    description: "Explore the regions and towns around Eastern Province and dig deeper into the experiences in each destination.",
    quote: "Golden shores and azure waters beckon beach lovers, accompanied by tropical fruits and fiery crab curries in a sunny paradise.",
    values: [
    { url: "https://picsum.photos/200/100?random=23", description: "Explore the serene landscapes and rich cultural heritage of a hidden gem destination." },
    { url: "https://picsum.photos/200/100?random=34", description: "Indulge in the vibrant colors and flavors of a bustling local market, where every corner tells a story." },
    { url: "https://picsum.photos/200/100?random=45", description: "Embark on an unforgettable journey through ancient ruins, where the whispers of history echo in every stone." },
    { url: "https://picsum.photos/200/100?random=56", description: "Savor the tranquility of a secluded beach, where the sun-kissed shores invite you to unwind and relax." },
    { url: "https://picsum.photos/200/100?random=67", description: "Immerse yourself in the lively rhythm of a vibrant city, where every street corner holds the promise of adventure." }
    ]
  },
  np: {
    title: "Northern Province",
    description: "Explore the regions and towns around Northern Province and dig deeper into the experiences in each destination.",
    quote: "Rugged terrain and serene lagoons thrive in a warm climate, where palmyra palm dishes and seafood specialties tantalize amidst captivating vistas.",
    values: [
    { url: "https://picsum.photos/200/100?random=23", description: "Explore the serene landscapes and rich cultural heritage of a hidden gem destination." },
    { url: "https://picsum.photos/200/100?random=34", description: "Indulge in the vibrant colors and flavors of a bustling local market, where every corner tells a story." },
    { url: "https://picsum.photos/200/100?random=45", description: "Embark on an unforgettable journey through ancient ruins, where the whispers of history echo in every stone." },
    { url: "https://picsum.photos/200/100?random=56", description: "Savor the tranquility of a secluded beach, where the sun-kissed shores invite you to unwind and relax." },
    { url: "https://picsum.photos/200/100?random=67", description: "Immerse yourself in the lively rhythm of a vibrant city, where every street corner holds the promise of adventure." }
    ]
  },
  nwp: {
    title: "North Western Province",
    description: "Explore the regions and towns around North Western Province and dig deeper into the experiences in each destination.",
    quote: "Stunning coastal beaches and lush greenery, along with mouthwatering seafood, create an unforgettable experience in a warm tropical climate.",
    values: [
    { url: "https://picsum.photos/200/100?random=23", description: "Explore the serene landscapes and rich cultural heritage of a hidden gem destination." },
    { url: "https://picsum.photos/200/100?random=34", description: "Indulge in the vibrant colors and flavors of a bustling local market, where every corner tells a story." },
    { url: "https://picsum.photos/200/100?random=45", description: "Embark on an unforgettable journey through ancient ruins, where the whispers of history echo in every stone." },
    { url: "https://picsum.photos/200/100?random=56", description: "Savor the tranquility of a secluded beach, where the sun-kissed shores invite you to unwind and relax." },
    { url: "https://picsum.photos/200/100?random=67", description: "Immerse yourself in the lively rhythm of a vibrant city, where every street corner holds the promise of adventure." }
    ]
  },
  ncp: {
    title: "North Central Province",
    description: "Explore the regions and towns around North Central Province and dig deeper into the experiences in each destination.",
    quote: "Ancient ruins and expansive plains evoke mystique in a dry climate, while pittu and kiri hodi ignite culinary passions with authentic Sri Lankan flavors.",
    values: [
    { url: "https://picsum.photos/200/100?random=23", description: "Explore the serene landscapes and rich cultural heritage of a hidden gem destination." },
    { url: "https://picsum.photos/200/100?random=34", description: "Indulge in the vibrant colors and flavors of a bustling local market, where every corner tells a story." },
    { url: "https://picsum.photos/200/100?random=45", description: "Embark on an unforgettable journey through ancient ruins, where the whispers of history echo in every stone." },
    { url: "https://picsum.photos/200/100?random=56", description: "Savor the tranquility of a secluded beach, where the sun-kissed shores invite you to unwind and relax." },
    { url: "https://picsum.photos/200/100?random=67", description: "Immerse yourself in the lively rhythm of a vibrant city, where every street corner holds the promise of adventure." }
    ]  },
  up: {
    title: "Uva Province",
    description: "Explore the regions and towns around Uva Province and dig deeper into the experiences in each destination.",
    quote: "Rolling hills and cascading waterfalls provide respite in a cool climate, complemented by aromatic rice and traditional kola kenda amidst captivating panoramas.",
    values: [
    { url: "https://picsum.photos/200/100?random=23", description: "Explore the serene landscapes and rich cultural heritage of a hidden gem destination." },
    { url: "https://picsum.photos/200/100?random=34", description: "Indulge in the vibrant colors and flavors of a bustling local market, where every corner tells a story." },
    { url: "https://picsum.photos/200/100?random=45", description: "Embark on an unforgettable journey through ancient ruins, where the whispers of history echo in every stone." },
    { url: "https://picsum.photos/200/100?random=56", description: "Savor the tranquility of a secluded beach, where the sun-kissed shores invite you to unwind and relax." },
    { url: "https://picsum.photos/200/100?random=67", description: "Immerse yourself in the lively rhythm of a vibrant city, where every street corner holds the promise of adventure." }
    ]  },
  swp: {
    title: "Sabaragamuwa Province",
    description: "Explore the regions and towns around Sabaragamuwa Province and dig deeper into the experiences in each destination.",
    quote: "Picturesque valleys and dense forests offer a serene escape in a moderate climate, accompanied by jak fruit dishes and wholesome village cuisine.",
    values: [
    { url: "https://picsum.photos/200/100?random=23", description: "Explore the serene landscapes and rich cultural heritage of a hidden gem destination." },
    { url: "https://picsum.photos/200/100?random=34", description: "Indulge in the vibrant colors and flavors of a bustling local market, where every corner tells a story." },
    { url: "https://picsum.photos/200/100?random=45", description: "Embark on an unforgettable journey through ancient ruins, where the whispers of history echo in every stone." },
    { url: "https://picsum.photos/200/100?random=56", description: "Savor the tranquility of a secluded beach, where the sun-kissed shores invite you to unwind and relax." },
    { url: "https://picsum.photos/200/100?random=67", description: "Immerse yourself in the lively rhythm of a vibrant city, where every street corner holds the promise of adventure." }
    ]  },
  default: {
    title: "Sri Lanka",
    description: "Explore the regions and towns around Sabaragamuwa Province and dig deeper into the experiences in each destination.",
    quote: "Sri Lanka, an island nation in the Indian Ocean, enchants with its diverse landscapes—golden beaches, misty hills, and ancient ruins. Rich in culture and cuisine, it offers spicy delicacies, vibrant festivals, and warm hospitality, promising an unforgettable travel experience.",
    values: [
    { url: "https://picsum.photos/200/100?random=23", description: "Explore the serene landscapes and rich cultural heritage of a hidden gem destination." },
    { url: "https://picsum.photos/200/100?random=34", description: "Indulge in the vibrant colors and flavors of a bustling local market, where every corner tells a story." },
    { url: "https://picsum.photos/200/100?random=45", description: "Embark on an unforgettable journey through ancient ruins, where the whispers of history echo in every stone." },
    { url: "https://picsum.photos/200/100?random=56", description: "Savor the tranquility of a secluded beach, where the sun-kissed shores invite you to unwind and relax." },
    { url: "https://picsum.photos/200/100?random=67", description: "Immerse yourself in the lively rhythm of a vibrant city, where every street corner holds the promise of adventure." }
    ]  }
};

// the above object is passed down to the below components <ImageCard> component as values

const ProvinceCard: React.FC<ProvinceCardProps> = ({ state }) => {

  const { title, description, quote, values }: ProvinceData = province_data[state as keyof typeof province_data];

  return (
    <div className="relative inset-0 justify-center w-[40%] flex flex-col">
      <h1 className={`text-slate text-5xl font-bold mt-0`}>{title}</h1>
      <p className="text-slate mt-4 mb-0">{description}</p>

      <ImageCard image_set={values} quote={quote} />
    </div>
  );
};




export default ProvinceCard;

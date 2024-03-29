import { Playfair_Display } from "next/font/google";
import { ImageCard } from "./image-card";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface ProvinceCardProps {
	state: string;
}

interface ProvinceData {
	title: string;
	description: string;
	quote: string;
	values: { url: string; description: string }[];
}

export const province_data = {
    wp: {
        title: "Western Province",
        description: "Explore the regions and towns around Western Province and dig deeper into the experiences in each destination.",
        quote: "Misty hills and vibrant tea plantations charm under a temperate climate, offering spicy curries and fresh seafood delights amidst lush greenery.",
        values: [
            { url: "https://picsum.photos/200/100?random=123", description: "Serene landscapes and rich heritage" },
            { url: "https://picsum.photos/200/100?random=456", description: "Vibrant local market flavors" },
            { url: "https://picsum.photos/200/100?random=789", description: "Unforgettable journey through ruins" },
            { url: "https://picsum.photos/200/100?random=321", description: "Tranquility of a secluded beach" },
            { url: "https://picsum.photos/200/100?random=654", description: "Lively rhythm of a vibrant city" },
        ],
    },
    cp: {
        title: "Central Province",
        description: "Explore the regions and towns around Central Province and dig deeper into the experiences in each destination.",
        quote: "Emerald landscapes and tranquil lakes flourish in a cool climate, perfect for savoring savory rice and curry delicacies amid aromatic spice gardens.",
        values: [
            { url: "https://picsum.photos/200/100?random=987", description: "Serene landscapes and rich heritage" },
            { url: "https://picsum.photos/200/100?random=654", description: "Vibrant local market flavors" },
            { url: "https://picsum.photos/200/100?random=321", description: "Unforgettable journey through ruins" },
            { url: "https://picsum.photos/200/100?random=789", description: "Tranquility of a secluded beach" },
            { url: "https://picsum.photos/200/100?random=123", description: "Lively rhythm of a vibrant city" },
        ],
    },
    sp: {
        title: "Southern Province",
        description: "Explore the regions and towns around Southern Province and dig deeper into the experiences in each destination.",
        quote: "Palm-fringed beaches and verdant rainforests allure under a balmy weather, offering spicy ambulthiyal and tropical fruits amidst breathtaking natural beauty.",
        values: [
            { url: "https://picsum.photos/200/100?random=159", description: "Serene landscapes and rich heritage" },
            { url: "https://picsum.photos/200/100?random=357", description: "Vibrant local market flavors" },
            { url: "https://picsum.photos/200/100?random=468", description: "Unforgettable journey through ruins" },
            { url: "https://picsum.photos/200/100?random=753", description: "Tranquility of a secluded beach" },
            { url: "https://picsum.photos/200/100?random=852", description: "Lively rhythm of a vibrant city" },
        ],
    },
    ep: {
        title: "Eastern Province",
        description: "Explore the regions and towns around Eastern Province and dig deeper into the experiences in each destination.",
        quote: "Golden shores and azure waters beckon beach lovers, accompanied by tropical fruits and fiery crab curries in a sunny paradise.",
        values: [
            { url: "https://picsum.photos/200/100?random=246", description: "Serene landscapes and rich heritage" },
            { url: "https://picsum.photos/200/100?random=135", description: "Vibrant local market flavors" },
            { url: "https://picsum.photos/200/100?random=579", description: "Unforgettable journey through ruins" },
            { url: "https://picsum.photos/200/100?random=864", description: "Tranquility of a secluded beach" },
            { url: "https://picsum.photos/200/100?random=927", description: "Lively rhythm of a vibrant city" },
        ],
    },
    np: {
        title: "Northern Province",
        description: "Explore the regions and towns around Northern Province and dig deeper into the experiences in each destination.",
        quote: "Rugged terrain and serene lagoons thrive in a warm climate, where palmyra palm dishes and seafood specialties tantalize amidst captivating vistas.",
        values: [
            { url: "https://picsum.photos/200/100?random=369", description: "Serene landscapes and rich heritage" },
            { url: "https://picsum.photos/200/100?random=258", description: "Vibrant local market flavors" },
            { url: "https://picsum.photos/200/100?random=741", description: "Unforgettable journey through ruins" },
            { url: "https://picsum.photos/200/100?random=630", description: "Tranquility of a secluded beach" },
            { url: "https://picsum.photos/200/100?random=147", description: "Lively rhythm of a vibrant city" },
        ],
    },
    nwp: {
        title: "North Western Province",
        description: "Explore the regions and towns around North Western Province and dig deeper into the experiences in each destination.",
        quote: "Stunning coastal beaches and lush greenery, along with mouthwatering seafood, create an unforgettable experience in a warm tropical climate.",
        values: [
            { url: "https://picsum.photos/200/100?random=951", description: "Serene landscapes and rich heritage" },
            { url: "https://picsum.photos/200/100?random=246", description: "Vibrant local market flavors" },
            { url: "https://picsum.photos/200/100?random=357", description: "Unforgettable journey through ruins" },
            { url: "https://picsum.photos/200/100?random=468", description: "Tranquility of a secluded beach" },
            { url: "https://picsum.photos/200/100?random=753", description: "Lively rhythm of a vibrant city" },
        ],
    },
	ncp: {
		title: "North Central Province",
		description: "Explore the regions and towns around North Central Province and dig deeper into the experiences in each destination.",
		quote:
			"Ancient ruins and expansive plains evoke mystique in a dry climate, while pittu and kiri hodi ignite culinary passions with authentic Sri Lankan flavors.",
		values: [
			{ url: `https://picsum.photos/200/100?random=${Math.floor(Math.random() * 1000)}`, description: "Serene landscapes and rich heritage" },
			{ url: `https://picsum.photos/200/100?random=${Math.floor(Math.random() * 1000)}`, description: "Vibrant local market flavors" },
			{ url: `https://picsum.photos/200/100?random=${Math.floor(Math.random() * 1000)}`, description: "Unforgettable journey through ruins" },
			{ url: `https://picsum.photos/200/100?random=${Math.floor(Math.random() * 1000)}`, description: "Tranquility of a secluded beach" },
			{ url: `https://picsum.photos/200/100?random=${Math.floor(Math.random() * 1000)}`, description: "Lively rhythm of a vibrant city" },
		],
	},
	up: {
		title: "Uva Province",
		description: "Explore the regions and towns around Uva Province and dig deeper into the experiences in each destination.",
		quote: "Rolling hills and cascading waterfalls provide respite in a cool climate, complemented by aromatic rice and traditional kola kenda amidst captivating panoramas.",
		values: [
			{ url: "https://picsum.photos/200/100?random=123", description: "Serene landscapes and rich heritage" },
			{ url: "https://picsum.photos/200/100?random=456", description: "Vibrant local market flavors" },
			{ url: "https://picsum.photos/200/100?random=789", description: "Unforgettable journey through ruins" },
			{ url: "https://picsum.photos/200/100?random=321", description: "Tranquility of a secluded beach" },
			{ url: "https://picsum.photos/200/100?random=654", description: "Lively rhythm of a vibrant city" },
		],
	},
	swp: {
		title: "Sabaragamuwa Province",
		description: "Explore the regions and towns around Sabaragamuwa Province and dig deeper into the experiences in each destination.",
		quote: "Picturesque valleys and dense forests offer a serene escape in a moderate climate, accompanied by jak fruit dishes and wholesome village cuisine.",
		values: [
			{ url: "https://picsum.photos/200/100?random=987", description: "Serene landscapes and rich heritage" },
			{ url: "https://picsum.photos/200/100?random=654", description: "Vibrant local market flavors" },
			{ url: "https://picsum.photos/200/100?random=321", description: "Unforgettable journey through ruins" },
			{ url: "https://picsum.photos/200/100?random=789", description: "Tranquility of a secluded beach" },
			{ url: "https://picsum.photos/200/100?random=123", description: "Lively rhythm of a vibrant city" },
		],
	},
	default: {
		title: "Sri Lanka",
		description: "Explore the regions and towns around Sabaragamuwa Province and dig deeper into the experiences in each destination.",
		quote: "Sri Lanka, an island nation in the Indian Ocean, enchants with its diverse landscapes—golden beaches, misty hills, and ancient ruins. Rich in culture and cuisine, it offers spicy delicacies, vibrant festivals, and warm hospitality, promising an unforgettable travel experience.",
		values: [
			{ url: "https://picsum.photos/200/100?random=987", description: "Serene landscapes and rich heritage" },
			{ url: "https://picsum.photos/200/100?random=654", description: "Vibrant local market flavors" },
			{ url: "https://picsum.photos/200/100?random=321", description: "Unforgettable journey through ruins" },
			{ url: "https://picsum.photos/200/100?random=789", description: "Tranquility of a secluded beach" },
			{ url: "https://picsum.photos/200/100?random=123", description: "Lively rhythm of a vibrant city" },
		],
	},	
};

// the above object is passed down to the below components <ImageCard> component as values

const ProvinceCard: React.FC<ProvinceCardProps> = ({ state }) => {

	const { title, description, quote, values }: ProvinceData = province_data[state as keyof typeof province_data];

	return (

			<ImageCard image_set={values} quote={quote} title={title} description={description} />

	)
}

export default ProvinceCard;

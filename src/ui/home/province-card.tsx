import { Grenze_Gotisch } from "next/font/google";
import { ImageCard } from "./image-card";

interface ProvinceCardProps {
	state: string;
}

interface ProvinceData {
  title: string;
  description: string;
  quote: string;
  values: string[];
}

export const province_data = {
  wp: {
    title: "Western Province",
    description: "Explore the regions and towns around Western Province and dig deeper into the experiences in each destination.",
    quote: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    values: ["string1", "string2", "string3", "string4", "string5", "string6"]
  },
  cp: {
    title: "Central Province",
    description: "Explore the regions and towns around Central Province and dig deeper into the experiences in each destination.",
    quote: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    values: ["string1", "string2", "string3", "string4", "string5", "string6"]
  },
  sp: {
    title: "Southern Province",
    description: "Explore the regions and towns around Southern Province and dig deeper into the experiences in each destination.",
    quote: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    values: ["string1", "string2", "string3", "string4", "string5", "string6"]
  },
  ep: {
    title: "Eastern Province",
    description: "Explore the regions and towns around Eastern Province and dig deeper into the experiences in each destination.",
    quote: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    values: ["string1", "string2", "string3", "string4", "string5", "string6"]
  },
  np: {
    title: "Northern Province",
    description: "Explore the regions and towns around Northern Province and dig deeper into the experiences in each destination.",
    quote: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    values: ["string1", "string2", "string3", "string4", "string5", "string6"]
  },
  nwp: {
    title: "North Western Province",
    description: "Explore the regions and towns around North Western Province and dig deeper into the experiences in each destination.",
    quote: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    values: ["string1", "string2", "string3", "string4", "string5", "string6"]
  },
  ncp: {
    title: "North Central Province",
    description: "Explore the regions and towns around North Central Province and dig deeper into the experiences in each destination.",
    quote: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    values: ["string1", "string2", "string3", "string4", "string5", "string6"]
  },
  up: {
    title: "Uva Province",
    description: "Explore the regions and towns around Uva Province and dig deeper into the experiences in each destination.",
    quote: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    values: ["string1", "string2", "string3", "string4", "string5", "string6"]
  },
  swp: {
    title: "Sabaragamuwa Province",
    description: "Explore the regions and towns around Sabaragamuwa Province and dig deeper into the experiences in each destination.",
    quote: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    values: ["string1", "string2", "string3", "string4", "string5", "string6"]
  },
  default: {
    title: "Sri Lanka",
    description: "Explore the regions and towns around Sabaragamuwa Province and dig deeper into the experiences in each destination.",
    quote: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    values: ["string1", "string2", "string3", "string4", "string5", "string6"]
  }
};

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

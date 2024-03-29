import { Grenze_Gotisch } from "next/font/google";

const grenze_gotisch = Grenze_Gotisch({ subsets: ["latin"] });

interface ProvinceCardProps {
  state: string;
}

const ProvinceCard: React.FC<ProvinceCardProps> = ({ state }) => {
  let title = "";
  let description = "";

  switch (state) {
    case "Western":
      title = "Destinations in Western Province";
      description = "Explore the regions and towns around Western Province and dig deeper into the experiences in each destination.";
      break;
    case "Central":
      title = "Destinations in Central Province";
      description = "Explore the regions and towns around Central Province and dig deeper into the experiences in each destination.";
      break;
    case "Southern":
      title = "Destinations in Southern Province";
      description = "Explore the regions and towns around Southern Province and dig deeper into the experiences in each destination.";
      break;
    case "Eastern":
      title = "Destinations in Eastern Province";
      description = "Explore the regions and towns around Eastern Province and dig deeper into the experiences in each destination.";
      break;
    case "Northern":
      title = "Destinations in Northern Province";
      description = "Explore the regions and towns around Northern Province and dig deeper into the experiences in each destination.";
      break;
    case "NorthWestern":
      title = "Destinations in North Western Province";
      description = "Explore the regions and towns around North Western Province and dig deeper into the experiences in each destination.";
      break;
    case "NorthCentral":
      title = "Destinations in North Central Province";
      description = "Explore the regions and towns around North Central Province and dig deeper into the experiences in each destination.";
      break;
    case "Uva":
      title = "Destinations in Uva Province";
      description = "Explore the regions and towns around Uva Province and dig deeper into the experiences in each destination.";
      break;
    case "Sabaragamuwa":
      title = "Destinations in Sabaragamuwa Province";
      description = "Explore the regions and towns around Sabaragamuwa Province and dig deeper into the experiences in each destination.";
      break;
    default:
      title = "Destinations";
      description = `Explore the regions and towns around ${state} and dig deeper into the experiences in each destination.`;
      break;
  }

  return (
    <div className="relative inset-0 justify-center w-[40%] flex flex-col">
      <h1 className={`text-slate text-5xl font-bold mt-0`}>
        {title}
      </h1>
      <p className="text-slate mt-4 mb-0">
        {description}
      </p>
    </div>
  );
};



export default ProvinceCard;

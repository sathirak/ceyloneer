import { Grenze_Gotisch } from "next/font/google";

const grenze_gotisch = Grenze_Gotisch({ subsets: ["latin"] });

const Footer = () => {
	return (
		<footer className="bg-cyan-950 text-white py-4 w-full z-10">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className={`text-3xl bg-cyan-950 ${grenze_gotisch.className} ml-[15%]`}>Ceyloneer</h1>
			</div>
		</footer>
	);
};

export default Footer;

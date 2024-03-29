import { Grenze_Gotisch } from "next/font/google";

const grenze_gotisch = Grenze_Gotisch({ subsets: ["latin"] });

const Footer = () => {
	return (
		<footer className="bg-cyan-950 text-white py-4 w-full z-10">
			<div className="container mx-auto flex justify-between items-center">
				
			</div>
			<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
				<h1 className={`text-3xl bg-cyan-950 ${grenze_gotisch.className}`}>Ceyloneer</h1>
				<span className="text-sm text-white sm:text-center dark:text-gray-400">
					© 2023{" "}
					<a href="#" className="hover:underline">
						Ceyloneer™
					</a>
					. All Rights Reserved.
				</span>
			</div>
			<div className="mx-auto w-full max-w-screen-xl">
				<div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
					<div>
						<h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Company</h2>
						<ul className="text-white dark:text-gray-400 font-medium">
							<li className="mb-4">
								<a href="#" className=" hover:underline">
									About
								</a>
							</li>
							<li className="mb-4">
								<a href="#" className="hover:underline">
									Careers
								</a>
							</li>
							<li className="mb-4">
								<a href="#" className="hover:underline">
									Brand Center
								</a>
							</li>
							<li className="mb-4">
								<a href="#" className="hover:underline">
									Blog
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Help center</h2>
						<ul className="text-white dark:text-gray-400 font-medium">
							<li className="mb-4">
								<a href="#" className="hover:underline">
									Discord Server
								</a>
							</li>
							<li className="mb-4">
								<a href="#" className="hover:underline">
									Twitter
								</a>
							</li>
							<li className="mb-4">
								<a href="#" className="hover:underline">
									Facebook
								</a>
							</li>
							<li className="mb-4">
								<a href="#" className="hover:underline">
									Contact Us
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
						<ul className="text-white dark:text-gray-400 font-medium">
							<li className="mb-4">
								<a href="#" className="hover:underline">
									Privacy Policy
								</a>
							</li>
							<li className="mb-4">
								<a href="#" className="hover:underline">
									Licensing
								</a>
							</li>
							<li className="mb-4">
								<a href="#" className="hover:underline">
									Terms &amp; Conditions
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Download</h2>
						<ul className="text-white dark:text-gray-400 font-medium">
							<li className="mb-4">
								<a href="#" className="hover:underline">
									iOS
								</a>
							</li>
							<li className="mb-4">
								<a href="#" className="hover:underline">
									Android
								</a>
							</li>
							<li className="mb-4">
								<a href="#" className="hover:underline">
									Windows
								</a>
							</li>
							<li className="mb-4">
								<a href="#" className="hover:underline">
									MacOS
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

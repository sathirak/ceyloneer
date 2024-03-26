import Link from 'next/link';
import {Grenze_Gotisch} from "next/font/google";

const grenze_gotisch = Grenze_Gotisch({ subsets: ["latin"] });

const Header = () => {
  return (
<header className="bg-cyan-950 text-white py-4 fixed w-full z-10">
  <div className="container mx-auto flex justify-between items-center">
    <h1 className={`text-5xl bg-cyan-950 ${grenze_gotisch.className} ml-[25%]`}>Ceyloneer</h1>
  </div>
</header>

  );
};

export default Header;

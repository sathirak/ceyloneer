import Link from 'next/link';
import {Grenze_Gotisch} from "next/font/google";

const grenze_gotisch = Grenze_Gotisch({ subsets: ["latin"] });

const Header = () => {
  return (
    <header className="bg-cyan-950 text-white py-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
      
        <Link href="/">Home
        </Link>

        <h1 className={`text-5xl bg-cyan-950 ${grenze_gotisch.className} `} >Ceyloneer</h1>

        <nav className="space-x-4">
          <Link href="/about">About
          </Link>
          <Link href="/services">Services
          </Link>
          <Link href="/contact">Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

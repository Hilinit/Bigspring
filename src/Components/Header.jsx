import { FaBars } from "react-icons/fa";
import logo from "../../public/assets/imgi_1_logo.png";
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <>
      <div className=" flex items-center justify-around p-5">
        <div className="text-xl lg:text-xl font-bold  text-black">
          <img src={logo} alt="logo" />
        </div>

        <ul className=" gap-8 text-xl text-black hidden lg:flex">
          <li className="hover:text-[#0aa8a7]">
            <Link to={"/"}> Home</Link>
          </li>
          <li className="hover:text-[#0aa8a7]">
            <Link to={"/blog"}> Blog</Link>
          </li>
          <li className="hover:text-[#0aa8a7]">
            <Link to={"/pricing"}> Pricing</Link>
          </li>
          <li className="hover:text-[#0aa8a7]">
            <Link to={"/contact"}> Contact</Link>
          </li>
          <li className="hover:text-[#0aa8a7]">
            <Link to={"/faq"}> FAQ</Link>
          </li>
        </ul>
        <button className="bg-[#0aa8a7] text-white px-8 py-3 rounded-4xl hidden lg:block">
          Get Started
        </button>
        <FaBars className="text-3xl lg:hidden text-gray-500" />
      </div>
      
    </>
  );
}

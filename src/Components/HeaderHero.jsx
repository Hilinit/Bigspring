import { FaBars } from "react-icons/fa";
import logo from "../assets/imgi_1_logo.png";
import hero from "../assets/imgi_2_banner-art.svg";

export default function Header() {
  return (
    <>
      <div className=" flex items-center justify-around p-5">
        <div className="text-xl lg:text-xl font-bold  text-black">
          <img src={logo} alt="logo" />
        </div>
        <ul className=" gap-8 text-xl text-black hidden lg:flex">
          <li className="text-[#0aa8a7] hover:text-[#0aa8a7]">Home</li>
          <li className="hover:text-[#0aa8a7]">Blog</li>
          <li className="hover:text-[#0aa8a7]">Pricing</li>
          <li className="hover:text-[#0aa8a7]">Contact</li>
          <li className="hover:text-[#0aa8a7]">FAQ</li>
        </ul>
        <button className="bg-[#0aa8a7] text-white px-8 py-3 rounded-4xl hidden lg:block">
          Get Started
        </button>
        <FaBars className="text-3xl lg:hidden text-gray-500" />
      </div>
      <div className="flex flex-col items-center justify-center w-[60%] mx-auto mt-20">
        <h2 className="font-bold text-4xl lg:text-6xl text-center">
          Let us solve your critical website development challenges
        </h2>
        <p className="text-sm lg:text-lg text-gray-500 mt-10 text-center block w-[80%] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          fugit aspernatur illo laboriosam culpa accusantium obcaecati
          praesentium distinctio ipsam! Quos expedita soluta doloribus totam
          esse quia molestiae ratione, velit amet?
        </p>
      </div>
      <div className="flex items-center justify-center w-[60%] mx-auto m-20">
        <img src={hero} alt="hero" />
      </div>
    </>
  );
}

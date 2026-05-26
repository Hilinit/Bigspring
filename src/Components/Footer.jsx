import { MdFacebook } from "react-icons/md";
import { FaTwitter, FaSkype, FaLinkedin } from "react-icons/fa";

import logo from "../assets/imgi_1_logo.png";
function Footer() {
  return (
    <div className="bg-[#edf6f5]  ">
      <div className="w-[80%] grid grid-cols-2 lg:grid-cols-4 gap-4 py-10 lg:p-20 mx-auto">
        <div>
          <h2 className="font-bold text-2xl mb-4">Company</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Pricing</li>
            <li>Quick Start</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-2xl mb-4">Product</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Features</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-2xl mb-4">Support</h2>
          <ul className="space-y-2 text-gray-600">
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <div className="text-xl lg:text-xl font-bold  text-black">
            <img src={logo} alt="logo" />
          </div>
          <p className="text-sm lg:text-lg text-gray-500  mt-4  ">
            Lorem ipsum dolor sit amet, consectetur elit. Consjat tristique eget
            amet, tempus eu at cttur.
          </p>

          <ul className="flex flex-row  mt-5  mx-auto gap-5">
            <li className="text-xl text-[#0aa8a7] border border-[#0aa8a7] p-2 rounded-full hover:bg-[#0aa8a7] hover:text-white">
              <MdFacebook />
            </li>
            <li className="text-xl text-[#0aa8a7] border border-[#0aa8a7] p-2 rounded-full hover:bg-[#0aa8a7] hover:text-white">
              <FaTwitter />
            </li>
            <li className="text-xl text-[#0aa8a7] border border-[#0aa8a7] p-2 rounded-full hover:bg-[#0aa8a7] hover:text-white">
              <FaLinkedin />
            </li>
            <li className="text-xl text-[#0aa8a7] border border-[#0aa8a7] p-2 rounded-full hover:bg-[#0aa8a7] hover:text-white">
              <FaSkype />
            </li>
          </ul>
        </div>
      </div>

      <div className="pb-8 text-center text-gray-700">
        <hr className="w-[70%] mx-auto border-t border-gray-300 my-4" />
        <p className="text-lg">
          Designed and Developed By{" "}
          <span className="font-bold text-[#777777]">Themefisher</span> •
          Distributed by{" "}
          <span className="font-bold text-[#777777]">ThemeWagon</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;

import { IoCodeSlashSharp, IoSpeedometerOutline } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaUserClock, FaHeart, FaCloud } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div className="bg-[#edf6f5] py-20">
        <div className=" flex flex-col items-center justify-center w-[70%] mx-auto">
          <h2 className="font-bold text-3xl lg:text-6xl text-center ">
            Something You Need To Know
          </h2>
          <div className="grid grid-cols-3  gap-6 mx-auto mt-10">
            <div className="bg-white flex flex-col items-center justify-center rounded-2xl p-6">
              <div className="text-[#0aa8a7] text-4xl font-bold">
                <IoCodeSlashSharp />
              </div>
              <h3 className="text-2xl font-bold mt-2">Clean Code</h3>

              <p className="text-gray-500 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quam
                nihil
              </p>
            </div>

            <div className="bg-white flex flex-col items-center justify-center rounded-2xl p-6">
              <div className="text-[#0aa8a7] text-4xl font-bold">
                <HiOutlineDesktopComputer />
              </div>
              <h3 className="text-2xl font-bold mt-2">Object Oriented</h3>

              <p className="text-gray-500 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quam
                nihil
              </p>
            </div>

            <div className="bg-white flex flex-col items-center justify-center rounded-2xl p-6">
              <div className="text-[#0aa8a7] text-4xl font-bold">
                <FaUserClock />
              </div>
              <h3 className="text-2xl font-bold mt-2">24h Service</h3>

              <p className="text-gray-500 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quam
                nihil
              </p>
            </div>

            <div className="bg-white flex flex-col items-center justify-center rounded-2xl p-6">
              <div className="text-[#0aa8a7] text-4xl font-bold">
                <FaHeart />
              </div>
              <h3 className="text-2xl font-bold mt-2">Value for Money</h3>

              <p className="text-gray-500 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quam
                nihil
              </p>
            </div>

            <div className="bg-white flex flex-col items-center justify-center rounded-2xl p-6">
              <div className="text-[#0aa8a7] text-4xl font-bold">
                <IoSpeedometerOutline />
              </div>
              <h3 className="text-2xl font-bold mt-2">Faster Response</h3>

              <p className="text-gray-500 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quam
                nihil
              </p>
            </div>

            <div className="bg-white flex flex-col items-center justify-center rounded-2xl p-6">
              <div className="text-[#0aa8a7] text-4xl font-bold">
                <FaCloud />
              </div>
              <h3 className="text-2xl font-bold mt-2">Cloud Support</h3>

              <p className="text-gray-500 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quam
                nihil
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

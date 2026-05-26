import photo2 from "../assets/imgi_13_banner.svg";
import photo3 from "../assets/imgi_14_cta.svg";

function Feature5() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto mt-20">
        <h2 className="font-bold text-4xl lg:text-5xl block w-[30%]  text-center">
          Experience the best workflow with us
        </h2>
      </div>
      <div className="flex items-center justify-center  mx-auto m-20">
        <img src={photo2} className=" mt-10" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center shadow-lg rounded-xl w-[75%] mx-auto m-10 p-10">
        <img src={photo3} className="w-[80%] mx-auto" />

        <div className="flex flex-col w-[70%] mt-10">
          <h2 className="font-bold text-xl lg:text-4xl">
            Ready to get started?
          </h2>

          <p className="text-md lg:text-md text-gray-500 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            fugit aspernatur illo laboriosam culpa accusantium.
          </p>

          <a href="#" className="bg-[#0aa8a7] text-center text-white font-bold w-fit rounded-3xl px-6 py-4 mt-5" >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}
export default Feature5;

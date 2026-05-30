
import photo3 from "../../public/assets/imgi_14_cta.svg";

function Feature6() {
  return (
    <>
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
export default Feature6;

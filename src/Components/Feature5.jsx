import photo2 from "../../public/assets/imgi_13_banner.svg";

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
    </>
  );
}
export default Feature5;

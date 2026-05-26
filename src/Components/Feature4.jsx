//rfce
import photo1 from "../assets/imgi_10_service-slide-2.png";
function Feature4() {
  return (
    <div className="bg-[#edf6f5]">
      <div className="grid grid-cols-1  lg:grid-cols-2 w-[80%] mx-auto m-10">
        <img src={photo1} className="m-10" />

        <div className="flex flex-col  m-10 lg:m-20">
          <h2 className="font-bold text-xl lg:text-4xl ">
            A company standing different from others
          </h2>
          <p className="text-sm lg:text-md text-gray-500 mt-10  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            fugit aspernatur illo laboriosam culpa accusantium obcaecati
            praesentium distinctio ipsam! Quos expedita soluta doloribus totam
            esse quia molestiae ratione, velit amet?
          </p>
          <a href="#" className="text-[#0aa8a7]  mt-5">
            Chect it out →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Feature4;

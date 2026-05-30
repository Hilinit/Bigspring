
import hero from "../../public/assets/imgi_2_banner-art.svg";

export default function Header() {
  return (
    <>
     
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

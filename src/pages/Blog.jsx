
import blog1 from "../../public/assets/blog1.jpg";
import blog2 from "../../public/assets/blog2.jpg";
import blog3 from "../../public/assets/blog3.jpg";
function Blog() {
  return (
     <>
         
          <div className="flex flex-col items-center justify-center w-[80%] mx-auto mt-10">
            <h2 className="font-bold text-4xl lg:text-6xl text-center">
                  Latest news
            </h2>
            <div className="grid grid-cols-1  lg:grid-cols-2   mx-auto m-10">
              <img src={blog1} className=" rounded-2xl overflow-hidden w-full object-cover" />
      
              <div className="flex flex-col mt-2  lg:my-20 lg:mx-10">
                <h2 className="font-bold text-xl lg:text-4xl hover:text-[#0aa8a7] ">
                  Adversus is a web-based dialer and practical CRM solution
                </h2>
                <p className="text-sm lg:text-md text-gray-500 mt-3  ">
                ##### Heading exampleHere is an example of headings. You can use this heading by the following markdown rules. For example: use # for heading 1 and use ###### for heading 6.# Heading 1## He
                </p>
                <a href="#" className="bg-[#0aa8a7] text-center text-white font-bold w-fit rounded-4xl px-6 py-4 mt-3" >
                  Read More
                </a>
              </div>
            </div>


            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3   mx-auto mb-15">
              <div className="flex flex-col">
              <img src={blog2} className=" rounded-2xl overflow-hidden w-full object-cover" />
                <h2 className="font-bold  mt-5 text-xl lg:text-4xl hover:text-[#0aa8a7] ">
                  How to make toys from old Olarpaper
                </h2>
                <a href="#" className="bg-[#0aa8a7] text-center text-white font-bold w-fit rounded-4xl px-8 py-4 mt-6" >
                  Read More
                </a>
              </div>

              <div className="flex flex-col">
                <img src={blog3} className=" rounded-2xl overflow-hidden w-full object-cover" />
                <h2 className="font-bold  mt-5 text-xl lg:text-4xl hover:text-[#0aa8a7] ">
                  What you need to know about Photography
                </h2>
                <a href="#" className="bg-[#0aa8a7] text-center text-white font-bold w-fit rounded-4xl px-8 py-4 mt-6" >
                  Read More
                </a>
              </div>


              <div className="flex flex-col">
                <img src={blog1} className=" rounded-2xl overflow-hidden w-full object-cover" />
                <h2 className="font-bold  mt-5 text-xl lg:text-4xl hover:text-[#0aa8a7] ">
                  How to make toys from old Olarpaper
                </h2>
                <a href="#" className="bg-[#0aa8a7] text-center text-white font-bold w-fit rounded-4xl px-8 py-4 mt-6" >
                  Read More
                </a>
              </div>
            </div>



          </div>







        </>
  )
}

export default Blog

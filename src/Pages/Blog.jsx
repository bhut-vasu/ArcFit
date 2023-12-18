import BlogBox from "../components/BlogBox/BlogBox";
import Footer from "../components/Footer/Footer";
import Img1 from "../images/blogpage/1.jpg";
import Img2 from "../images/blogpage/2.jpg";
import Img3 from "../images/blogpage/3.jpg";
import Img4 from "../images/blogpage/4.jpg";
import Img5 from "../images/blogpage/5.jpg";
import Img6 from "../images/blogpage/6.jpg";
import Img7 from "../images/blogpage/7.jpg";
import Recent1 from "../images/blogpage/recent1.jpg";
import Recent2 from "../images/blogpage/recent2.jpg";
import Recent3 from "../images/blogpage/recent3.jpg";
import Recent4 from "../images/blogpage/recent4.jpg";
import Recent5 from "../images/blogpage/recent5.jpg";

function Blog() {
  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Blog
          </h1>
        </div>
        {/* blog */}
        <div className="py-[10rem] container gap-16 page-padding grid grid-cols-[64fr_35fr] md1000:grid-cols-1 md1000:gap-32">
          {/* blog */}
          <div className="flex flex-col gap-28">
            <BlogBox
              img={Img1}
              author="Admin"
              date="22/11/2023"
              type="Yoga"
              title="Yoga For Everyone in 2022"
              description=""
            />
            <BlogBox
              img={Img2}
              author="Training Head"
              date="13/11/2023"
              type="Workout"
              title="Getting Back Into CrossFit After Vacation"
              description=""
            />
            <BlogBox
              img={Img3}
              author="Marketing Team"
              date="28/06/2023"
              type="Fitness"
              title="Meet Fitness Ambassador Grace"
              description=""
            />
            <BlogBox
              img={Img4}
              author="Admin"
              date="08/05/2023"
              type="Hardware"
              title="The Best are European Materls Direct"
              description=""
            />
            <BlogBox
              img={Img5}
              author="Admin"
              date="01/01/2023"
              type="Exercise"
              title="Give your Fitness a Boost with our Gym"
              description=""
            />
            <BlogBox
              img={Img6}
              author="Blog Team"
              date="13/10/2022"
              type="Fitness"
              title="How to Get Fit Your Kids Moving Throughout The Summer"
              description=""
            />
            <BlogBox
              img={Img7}
              author="Blog Team"
              date="13/09/2023"
              type="Fitness Challange"
              title="Give your fitness a boost with our new gym challenge"
              description=""
            />
          </div>

          {/* Right Section */}
          <div>
            {/* Search Bar */}
            <form className="flex">
              <input
                className="border-solid border-[1px] text-[#444] text-[16px] font-medium h-[60px] py-[5px] px-[20px] w-full rounded-tl-xl rounded-bl-xl outline-none"
                type="search"
                placeholder="Search..."
              ></input>
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass bg-[#ff0336] text-white text-[23px] h-[60px] w-[60px] rounded-br-xl rounded-tr-xl pt-[18px]"></i>
              </button>
            </form>

            {/* Categories */}
            <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
              <p className="text-[18px] text-black font-bold mb-5">
                Categories
              </p>
              <span className="w-[40px] h-[3.5px] bg-[#ff0336]"></span>
              <ul className="text-[16px] text-[#7e7e7e] font-medium mt-10">
                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                    &nbsp; Body Building
                  </p>
                  <span>(4)</span>
                </li>

                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                    &nbsp; Boxing
                  </p>
                  <span>(4)</span>
                </li>

                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                    &nbsp; Crossfit
                  </p>
                  <span>(4)</span>
                </li>

                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                    &nbsp; Fitness
                  </p>
                  <span>(4)</span>
                </li>

                <li className="flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="text-[13px] fa-solid fa-chevron-right"></i>
                    &nbsp; Meditation
                  </p>
                  <span>(4)</span>
                </li>

                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                    &nbsp; Yoga
                  </p>
                  <span>(4)</span>
                </li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
              <p className="text-[18px] text-black font-bold mb-5">
                Recent Posts
              </p>
              <span className="w-[40px] h-[3.5px] bg-[#ff0336] mb-7"></span>
              <div className="flex flex-col gap-7">
                {/*  */}
                <div className="flex gap-8">
                  <img src={Recent1} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      November 22, 2023
                    </p>
                    <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                      Yoga For Everyone in 2024
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <img src={Recent2} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      November 13, 2023
                    </p>
                    <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                      Getting Back Into CrossFit
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <img src={Recent3} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      June 28, 2023
                    </p>
                    <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                      Meet Fitness Abassador Grace
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <img src={Recent4} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      May 8, 2023
                    </p>
                    <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                      The best are European Meditation Practitioner
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <img src={Recent5} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      March 22, 2023
                    </p>
                    <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                      Learn Boxing With Our Trainer John
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
              <p className="text-[18px] text-black font-bold mb-5">
                Popular Tags
              </p>
              <span className="w-[40px] h-[3.5px] bg-[#ff0336] mb-7"></span>
              <div className="flex gap-3 text-[16px] text-[#646464] font-medium flex-wrap">
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Crossfit
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Fitness
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Gym
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Meditation
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Running
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Workout
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Yoga
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Boxing
                </p>
              </div>
            </div>

            {/* Discount Banner */}
            <div className="blog-banner w-full h-[56rem] relative">
              <p className="absolute text-[34px] font-bold uppercase top-16 left-10 z-[2]">
                gymat
              </p>
              <span className="banner-shape top-14 left-0 z-[1] bg-white absolute w-[18rem] h-[60px]"></span>
              <div className="text-white flex flex-col absolute top-[10rem] left-10">
                <p className="text-[64px] font-bold">34%</p>
                <p className="text-[20px] font-bold -mt-[10px]">
                  Flat Discount
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Blog;

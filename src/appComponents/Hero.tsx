import { Send } from "lucide-react";
import topImg from "../assets/top.png";
import { FaMicrophone } from "react-icons/fa6";

const Hero = () => {
  const links = [
    { link: "Welcome", url: "" },
    { link: "About Us", url: "" },
    { link: "Need to Know", url: "" },
    { link: "Your Membership", url: "" },
    { link: "Booking Log", url: "" },
    { link: "Concierge", url: "" },
    { link: "My Preferences", url: "" },
  ];
  return (
    <div
      style={{
        backgroundImage: `url(${topImg})`,
      }}
      className=" relative bg-cover bg-center  bg-no-repeat min-h-[1076.04px] w-full "
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex justify-between items-center">
        <div className="font-bold text-[27.82px] leading-none uppercase font text-[#FFFFFF] mt-[36.5px] ml-[22px]">
          BOOKD
        </div>
        <div className="">
          <ul className="flex justify-between items-center w-[907px] h-[19px] mt-[43.5px] gap-[40px]">
            {links.map((link, index) => (
              <li
                className="text-[16px] cursor-pointer  text-[#C7C7C7]"
                key={index}
              >
                {link.link}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="bg-transparent shadow-[0px_1px_0px_0px_#383838] w-[157px] h-[54px] border-1 border-[#FFFFFF] px-[37px] py-[15px] rounded-[34px] text-[16px] font-bold text-[#FFFFFF] mt-[26px] cursor-pointer mr-[22px]">
            Log In
          </button>
        </div>
      </div>

      <div className="relative z-10  flex flex-col justify-center items-center mt-[280px]">
        <div>
          <h1 className=" text-[65px] font-medium leading-[100%] tracking-[0%] text-center text-white w-[782px] h-[156px] ">
            Travel Smarter Book, Plan & Stay Inspired with AI.
          </h1>
        </div>
        <div>
          <div className=" w-[782px] h-[75px] opacity-100 rounded-[50px] bg-[#1515150D] backdrop-blur-[18px] shadow-[inset_1px_1px_0px_0px_#FFFFFF40] flex items-center justify-center">
            <div className="flex-1 pl-12 pr-4">
              <input
                placeholder="How can I assist today?"
                type="text"
                className=" bg-transparent border-none outline-none w-full placeholder:w-[177px] h-[19px] placeholder:text-[16px] placeholder:font-normal placeholder:leading-[100%] placeholder:tracking-[0%] text-[#FFFFFF] placeholder:text-[#FFFFFF] "
              />
            </div>
            <div className="flex items-center gap-1 ml-10px">
              <div className="h-[67px] w-[67px] rounded-[50px] bg-[#232323] flex items-center justify-center cursor-pointer">
                <FaMicrophone size={24} color="#ffffff" />
              </div>
              <div className="h-[67px] w-[67px] rounded-[50px] bg-[#000000] flex items-center justify-center cursor-pointer ">
                <Send size={24} color="#ffffff" />
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};
export default Hero;

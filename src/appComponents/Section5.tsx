import { MoveDown, MoveRight } from "lucide-react";
import section5 from "../assets/section4.png"
import section4img from "../assets/section4img.png";
import mobile from "../assets/mobile.png";
const Section5 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${section5})`,
      }}
      className="bg-cover bg-center bg-no-repeat w-full min-h-screen "
    >
      <div className="container mx-auto px-10 flex flex-col">
        <div className="mt-20 flex ">
          <div className="h-[310px] w-[500px]">
            <h1 className="font-sf text-[60.56px] font-medium leading-[100%] tracking-[0%] text-[#A6A6A6]">
              GET YOUR BOOKD APP TODAY
            </h1>
            <div className="flex items-center gap-x-5 ">
              <button className="w-44 h-[50px] text-[#FFFFFF] rounded-[44px] border border-solid border-[#A4A4A4] opacity-100 text-[16px]  font-[400] leading-[30px] tracking-[0] flex items-center justify-center gap-2 cursor-pointer">
                Download Now
                <MoveDown size={16} />
              </button>
              <button className="w-44 h-[50px] text-[#FFFFFF] rounded-[44px] border border-solid border-[#A4A4A4] opacity-100 text-[16px]  font-[400] leading-[30px] tracking-[0] flex items-center justify-center gap-2 cursor-pointer">
                Try Bookd Now
                <MoveRight size={16} />
              </button>
            </div>
          </div>
          <div className="w-[682px] h-[840px]">
            <img src={mobile} alt="" className="object-contain w-full h-full" />
          </div>
        </div>
      </div>
    <div>
        <img src={section4img} alt="" className="h-[560px]"/>
    </div>
    </div>
  );
};

export default Section5;
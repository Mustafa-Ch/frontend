import { MoveRight } from "lucide-react";
import section2 from "../assets/section2.png"

const Section2 = () => {
  return (
    <div className="w-full h-[1080px] bg-black overflow-hidden">
      <div className="container mx-auto flex justify-between items-center gap-14  mt-20">
        <div className=" w-[752px]">
          <h1 className="text-[#FFFFFF] font-normal not-italic text-[44px] leading-[100%] tracking-[0%] uppercase ">
            AI for Flights, Hotels & Travel Reminders — Simple & Smart
          </h1>
          <p className=" text-[#FFFFFF]  not-italic text-[16px] leading-[30px] tracking-[0%] mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="w-[223px] h-[67px] border border-[#A4A4A4] rounded-[44px] text-[16px] leading-[30px] font-normal not-italic text-white flex items-center justify-center gap-8 cursor-pointer mt-10">
            Learn More
            <MoveRight size={18} />
          </button>
        </div>
        <div className=" w-[580px] h-[668px]rotate-0 opacity-100 rounded-[80px]">
          <img
            src={section2}
            alt=""
         
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;

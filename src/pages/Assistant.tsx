import { FaMicrophone } from "react-icons/fa6";
import assistant from "../assets/assistant.png";
import { Send } from "lucide-react";
import trip from "../assets/icons/icon1.png";
import room from "../assets/icons/icon2.png";
import flight from "../assets/icons/icon3.png";
import Marquee from "react-fast-marquee";
import { useState } from "react";

const Assistant = () => {
  const bookings = [
    { text: "Book a Trip to Rome", icon: trip },
    { text: "Book a Room in LA", icon: room },
    { text: "Book a Flight for Tomorrow", icon: flight },
    { text: "Book a Trip to Rome", icon: trip },
    { text: "Book a Flight for Tomorrow", icon: flight },
    { text: "Book a Trip to Rome", icon: trip },
    { text: "Book a Room in LA", icon: room },
    { text: "Book a Flight for Tomorrow", icon: flight },
  ];

  const [play, setPlay] = useState(true);
  const firstHalf = bookings.slice(0, 4);
  const secondHalf = bookings.slice(4, 8);

  const handleCycle = () => {
    setPlay(false);
    setTimeout(() => setPlay(true), 2000);
  };

  return (
    <div
      style={{ backgroundImage: `url(${assistant})` }}
      className="bg-cover bg-center bg-no-repeat w-full min-h-screen flex"
    >
      <div className="max-w-[1250px] w-full mx-auto flex flex-col justify-end items-center mb-10 px-4">
        <div className="flex flex-col gap-8 text-center">
          <h2 className="font-medium text-white leading-[100%] tracking-[0] text-[20px] sm:text-[22px] md:text-[24px] lg:text-[25px]">
            Good Evening! “Sam Wasper”
          </h2>
          <h1 className="font-medium text-white leading-[100%] tracking-[0] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[45px]">
            How can i assist today
          </h1>

          <div className="max-w-[600px] w-full lg:w-[600px] h-[55px] border rounded-[50px] border-[#141414] opacity-100 backdrop-blur-[18px] shadow-[inset_1px_1px_0px_0px_#FFFFFF40] flex items-center mx-auto">
            <div className="flex-1 pl-12 pr-4">
              <input
                type="text"
                placeholder="book your trip?"
                className="w-full h-[19px] bg-transparent border-none outline-none text-white placeholder:text-[#656565] placeholder:text-[16px] placeholder:font-normal placeholder:leading-[100%] placeholder:tracking-[0]"
              />
            </div>
            <div className="flex items-center gap-2 ml-5">
              <div className="h-[40px] w-[40px] rounded-[50px] bg-[#232323] flex items-center justify-center cursor-pointer">
                <FaMicrophone size={16} color="#ffffff" />
              </div>
              <div className="h-[40px] w-[40px] rounded-[50px] bg-[#000000] flex items-center justify-center cursor-pointer">
                <Send size={16} color="#ffffff" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 w-full">
          <div className="w-full max-w-[800px] rounded-[50px] overflow-hidden mx-auto">
            <Marquee
              direction="left"
              speed={50}
              play={play}
              gradient={false}
              onCycleComplete={handleCycle}
            >
              <div className="flex items-center gap-[10px] px-4">
                {[...firstHalf, ...firstHalf].map((data, index) => (
                  <div
                    key={index}
                    className="h-[50px] rounded-[50px] border border-[#2E2D2D] flex justify-between gap-x-3 items-center text-[#FFFFFF] font-medium text-[11px] cursor-pointer"
                  >
                    <div className="w-[44px] h-[44px] ml-0.5 rounded-full flex justify-center items-center bg-[#2A2A2A]">
                      <img src={data.icon} alt="" />
                    </div>
                    <p className="mr-1.5">{data.text}</p>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>

          <div className="w-full max-w-[800px] rounded-[50px] overflow-hidden mx-auto">
            <Marquee
              direction="right"
              speed={50}
              play={play}
              gradient={false}
              onCycleComplete={handleCycle}
            >
              <div className="flex items-center gap-[10px] px-4">
                {[...secondHalf, ...secondHalf].map((data, index) => (
                  <div
                    key={index}
                    className="h-[50px] rounded-[50px] border border-[#2E2D2D] flex justify-between gap-x-3 items-center text-[#FFFFFF] font-medium text-[11px] cursor-pointer"
                  >
                    <div className="w-[44px] h-[44px] ml-0.5 rounded-full flex justify-center items-center bg-[#2A2A2A]">
                      <img src={data.icon} alt="" />
                    </div>
                    <p className="mr-1.5">{data.text}</p>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistant;

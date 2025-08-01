import { Check } from "lucide-react";
const Section4 = () => {
    const featureList = [
      { icon: <Check size={12} color="white" />, text: "30+ Features" },
      { icon: <Check size={12} color="white" />, text: "Priority Support" },
      { icon: <Check size={12} color="white" />, text: "4 Team Members" },
      { icon: <Check size={12} color="white" />, text: "Premium Features" },
      { icon: <Check size={12} color="white" />, text: "Data Insights" },
    ];
  return (
    <div className="bg-black w-full min-h-screen ">
      <div className="container mx-auto  flex flex-col justify-center items-center">
        <div className="my-20 w-full flex flex-col items-center justify-center">
          <div className="w-[393px] h-[67px]  opacity-100 ">
            <h1 className="text-[40px] text-center  leading-[100%] tracking-[0%] text-white font-normal not-italic font-sfpro">
              PRICING PLANS
            </h1>
          </div>
          <div className="font-poppins flex justify-center items-center gap-20 mt-14">
            {[1, 2, 3].map(() => (
              <div className=" border-1 rounded-[24px] border-[#454545]">
                <div className="ml-[20px]">
                  <div className="flex flex-col gap-2 mt-5">
                    <h2 className="w-[66.21px] h-[30px] text-[24px] leading-[30px] font-semibold font-poppins text-[#F4F7FF] inline-block align-middle">
                      Basic
                    </h2>
                    <p className="w-[280.22px] h-[60px] text-[10px] leading-[20px] font-normal font-poppins text-[#CAC9D1] opacity-100 align-middle">
                      Harnessing the power of artificial intelligence to
                      revolutionize industries and enhance human experiences.
                    </p>
                  </div>
                  <div className="flex justify-start items-center ml-0">
                    <div className="w-[250px] h-[1px] opacity-100 bg-gradient-to-l mt-3 from-[#1A1A3B] via-white to-[#1A1A3B]  ml-0"></div>
                  </div>
                  <div className="flex flex-col gap-4  mt-10">
                    {featureList.map((data) => (
                      <div className="flex items-center gap-3">
                        <div className="w-[29px] h-[29px] rounded-[10px] bg-[#373737] flex justify-center items-center">
                          {data.icon}
                        </div>
                        <div className="text-[#F4F7FF] font-poppins font-normal text-[12px] leading-[20px]">
                          {data.text}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5">
                    <h1 className="font-poppins font-medium text-[30px] leading-[56px] tracking-[-0.09em] text-[#FFFFFF]">
                      $39.99
                      <span className=" font-normal text-[16px] leading-[24px] tracking-[0px] text-[#636363]">
                        /per month
                      </span>
                    </h1>
                  </div>
                  <div className="my-5">
                    <button className="w-[132px] h-[41px] rounded-[59px] border border-[#828282] font-poppins font-normal text-[14px] leading-[100%] tracking-[0%] text-white cursor-pointer backdrop-blur-[66px] bg-white/10">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Section4

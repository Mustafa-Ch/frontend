import section3 from "../assets/section3.jpg";

const Section3 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${section3})`,
      }}
      className="bg-cover bg-center bg-no-repeat min-h-[968px] w-full flex flex-col justify-between"
    >
      <div className="container mx-auto flex-1 flex flex-col justify-between">
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-[1028px] h-[138px] opacity-100 text-center mx-auto">
            <h1 className="text-[58px] leading-[100%] tracking-[0%] text-white font-normal not-italic">
              Smart Bookings. Inspired Travel. AI-Powered.
            </h1>
          </div>
        </div>

        <div className="translate-y-[-30%] flex flex-col justify-center gap-5">
          <div className="w-[346px] h-[42px] opacity-100">
            <h2 className="text-[35px] leading-[100%] tracking-[0%] text-white font-medium not-italic">
              Why Choose BOOKD
            </h2>
          </div>
          <div className="w-[465px] h-[72px] text-white text-[14px] leading-[24px] font-[400] ">
            <p className="font-sfpro not-italic">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-[93px] h-[59px] opacity-100 text-white">
              <h1 className="text-[32px] leading-[24px] font-semibold font-sfpro not-italic">
                01
              </h1>
              <p className="text-white text-[14px] h-[24px] w-[93px] leading-[24px] font-normal font-sfpro not-italic">
                All-in-One Travel Assistant
              </p>
            </div>
            <div className="w-[99px] h-[59px] opacity-100 text-white">
              <h1 className="text-[32px] leading-[24px] font-semibold font-sfpro not-italic">
                02
              </h1>
              <p className="text-white text-[14px] h-[24px] w-[99px] leading-[24px] font-normal font-sfpro not-italic">
                Voice & Text Booking Options
              </p>
            </div>
            <div className="w-[99px] h-[59px] opacity-100 text-white">
              <h1 className="text-[32px] h-[24px] w-[99px] leading-[24px] font-semibold font-sfpro not-italic">
                03
              </h1>
              <p className="text-white text-[14px] h-[24px] w-[99px] leading-[24px] font-normal font-sfpro not-italic">
                Smarter, Faster Decisions
              </p>
            </div>
            <div className="w-[99px] h-[59px] opacity-100 text-white">
              <h1 className="text-[32px] leading-[24px] font-semibold font-sfpro not-italic">
                04
              </h1>
              <p className="text-white text-[14px] leading-[24px] font-normal font-sfpro not-italic h-[24px] w-[99px]">
                Save Time, Stay Productive
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;

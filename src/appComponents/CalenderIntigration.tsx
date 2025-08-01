

const CalenderIntigration = () => {
  return (
    <div className="w-full max-w-[1250px] mx-auto">
      <h1 className="font-medium text-[13px] sm:text-[14px] text-white leading-[100%] tracking-normal mb-4">
        Personal Information
      </h1>

      <h2 className="text-white text-[13px] sm:text-[14px] leading-[100%] tracking-normal mb-3 mt-10">
        Connect
      </h2>

      <div className="flex flex-col gap-3 mt-5">
        <div className="p-5 max-w-[150px] rounded-[50px] border border-[#2E2D2D] text-white h-[40px] flex justify-center items-center leading-[100%] tracking-[0] cursor-pointer text-[13px] sm:text-[14px]">
          Google Calendar
        </div>
        <div className="px-4 max-w-[100px] rounded-[50px] border border-[#2E2D2D] text-white h-[40px] flex justify-center items-center leading-[100%] tracking-[0] cursor-pointer text-[13px] sm:text-[14px]">
          iCal
        </div>
        <div className="px-4 max-w-[110px] rounded-[50px] border border-[#2E2D2D] text-white h-[40px] flex justify-center items-center leading-[100%] tracking-[0] cursor-pointer text-[13px] sm:text-[14px]">
          Outlook
        </div>
      </div>

      <p className="font-medium text-[13px] sm:text-[14px] leading-[100%] tracking-normal mt-10 text-white">
        Confirmed plans are seamlessly synced to your schedule.
      </p>
    </div>
  );
};

export default CalenderIntigration;



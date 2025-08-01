const MembershipBilling = () => {
  return (
    <div className="w-full max-w-[1250px] mx-auto">
      <h1 className="font-medium text-[14px] sm:text-[15px] leading-[100%] tracking-normal text-white mb-4">
        Membership & Billing
      </h1>

      <div className="flex justify-between items-center w-full max-w-[300px] mt-7">
        <p className="font-medium text-[13px] sm:text-[14px] leading-[100%] text-[#838383] tracking-normal">
          Current Plan: <span className="text-white">Free</span>
        </p>
        <div className="max-w-[80px] w-full rounded-[13px] border border-[#2E2D2D] text-white h-[30px] flex justify-center items-center leading-[100%] tracking-[0] cursor-pointer text-[13px] sm:text-[14px]">
          Upgrade
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-white text-[13px] sm:text-[14px] leading-[100%] tracking-normal mb-3">
          Payment Method
        </h2>

        <div className="max-w-[1000px] w-full h-[50px] bg-[#D9D9D908] border-b border-[#4B4C46] rounded-tl-[20px] rounded-tr-[20px] flex justify-between items-center px-2 mt-5">
          <p className="text-[13px] sm:text-[14px] text-white leading-[100%] tracking-normal">
            By Credit Card
          </p>
          <button className="h-[30px] w-[80px] bg-white rounded-[19px] flex items-center justify-center gap-[10px] cursor-pointer text-[13px] sm:text-[14px] font-semibold">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipBilling;

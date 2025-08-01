
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const PersonalInformation = () => {
  return (
    <div className="w-full max-w-[1250px] mx-auto">
      <h1 className="font-medium text-[14px] sm:text-[15px] leading-[100%] tracking-normal text-white mb-4">
        Personal Information
      </h1>

      <div className="mt-10">
        <h2 className="text-white text-[13px] sm:text-[14px] leading-[100%] tracking-normal mb-3">
          Full Name
        </h2>
        <div className="max-w-[1000px] w-full h-[50px] bg-[#D9D9D908] border-b border-[#4B4C46] rounded-tl-[20px] rounded-tr-[20px] flex justify-between items-center px-2">
          <p className="text-[13px] sm:text-[14px] text-white leading-[100%] tracking-normal">
            Sam Ryees
          </p>
          <button className="h-[30px] w-[80px] bg-white rounded-[19px] flex items-center justify-center gap-2 cursor-pointer text-[13px] font-semibold">
            Edit
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-[1000px] gap-5 mt-5">
        <div className="w-full">
          <h2 className="text-white text-[13px] sm:text-[14px] leading-[100%] tracking-normal mb-4">
            Email Address
          </h2>
          <div className="w-full h-[50px] bg-[#D9D9D908] border-b border-[#4B4C46] rounded-tl-[20px] rounded-tr-[20px] flex justify-between items-center px-2">
            <p className="text-[13px] sm:text-[14px] text-white leading-[100%] tracking-normal">
              Sam Ryees
            </p>
            <button className="h-[30px] w-[80px] bg-white rounded-[19px] flex items-center justify-center gap-2 cursor-pointer text-[13px] font-semibold">
              Edit
            </button>
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-white text-[13px] sm:text-[14px] leading-[100%] tracking-normal mb-4">
            Mobile Number
          </h2>
          <div className="w-full h-[50px] bg-[#D9D9D908] border-b border-[#4B4C46] rounded-tl-[20px] rounded-tr-[20px] flex justify-between items-center px-2">
            <p className="text-[13px] sm:text-[14px] text-white leading-[100%] tracking-normal">
              Sam Ryees
            </p>
            <button className="h-[30px] w-[80px] bg-white rounded-[19px] flex items-center justify-center gap-2 cursor-pointer text-[13px] font-semibold">
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-white text-[13px] sm:text-[14px] leading-[100%] tracking-normal mb-4">
          Select Time Zone
        </h2>
        <div className="max-w-[1000px] w-full h-[50px] bg-[#D9D9D908] border-b border-[#4B4C46] rounded-tl-[20px] rounded-tr-[20px] flex justify-between items-center px-2">
          <Select>
            <SelectTrigger className="w-full border-none outline-none text-[13px] text-white">
              <SelectValue
                placeholder="GMT +5"
                className="font-semibold text-[15px] text-white"
              />
            </SelectTrigger>
            <SelectContent className="text-white bg-[#D9D9D908]">
              <SelectItem value="light">GMT +5</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;




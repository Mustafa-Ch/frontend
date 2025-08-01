
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";



const Notification = () => {
  return (
    <div className="flex flex-col gap-5 w-full max-w-[1250px] mx-auto">
      <h1 className="font-medium text-[14px] sm:text-[15px] leading-[100%] tracking-normal text-white mb-4">
        Notification
      </h1>

      <div className="flex flex-col gap-14">
        <div className="max-w-[250px] w-full">
          <h3 className="text-white text-[14px] sm:text-[15px] leading-[100%] tracking-normal">
            Notification Preferences
          </h3>

          <div className="flex justify-between items-center w-full mt-7">
            <p className="text-[12px] sm:text-[13px] leading-[100%] tracking-normal text-white">
              Email Confirmations
            </p>
            <Switch className="border border-[#89898980] backdrop-blur-[8px] w-[40px]" />
          </div>

          <div className="flex justify-between items-center w-full mt-8">
            <p className="text-[12px] sm:text-[13px] leading-[100%] tracking-normal text-white">
              SMS Alerts
            </p>
            <Switch className="border border-[#89898980] backdrop-blur-[8px] w-[40px]" />
          </div>
        </div>

        <div className="max-w-[250px] w-full">
          <h2 className="text-white text-[14px] sm:text-[15px] leading-[100%] tracking-normal">
            Discreet Push Notifications
          </h2>

          <div className="flex flex-col gap-5 mt-10">
            <RadioGroup defaultValue="Timely">
              <div className="flex justify-between items-center">
                <Label
                  htmlFor="Timely"
                  className="text-[12px] sm:text-[13px] leading-[100%] tracking-normal text-white"
                >
                  Timely
                </Label>
                <RadioGroupItem value="Timely" />
              </div>

              <div className="flex justify-between items-center">
                <Label
                  htmlFor="relevant"
                  className="text-[12px] sm:text-[13px] leading-[100%] tracking-normal text-white"
                >
                  Relevant
                </Label>
                <RadioGroupItem value="relevant" />
              </div>

              <div className="flex justify-between items-center">
                <Label
                  htmlFor="Never Overwhelming"
                  className="text-[12px] sm:text-[13px] leading-[100%] tracking-normal text-white"
                >
                  Never Overwhelming
                </Label>
                <RadioGroupItem value="Never Overwhelming" />
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;



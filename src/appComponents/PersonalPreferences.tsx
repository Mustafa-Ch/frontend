import { MultiSelect } from "@/components/ui/multi-select";
import { useState } from "react";


const PersonalPreferences = () => {
  const tripOptions = [
    { label: "Paris", value: "paris" },
    { label: "New York", value: "new-york" },
    { label: "Tokyo", value: "tokyo" },
    { label: "London", value: "london" },
  ];

  const [selectedTrips, setSelectedTrips] = useState<string[]>([]);

  return (
    <div className="w-full max-w-[1250px] mx-auto">
      <h1 className="font-medium text-[14px] sm:text-[15px] leading-[100%] tracking-normal text-white mb-4">
        Personal Preferences
      </h1>

      <div className="mt-10">
        <h2 className="text-white text-[13px] sm:text-[14px] leading-[100%] tracking-normal mb-3">
          Preferred Cities
        </h2>
        <MultiSelect
          options={tripOptions}
          selected={selectedTrips}
          onSelectChange={setSelectedTrips}
          placeholder="Select destinations"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between max-w-[1000px] gap-5 mt-5">
        <div className="w-full">
          <h2 className="text-white text-[13px] sm:text-[14px] leading-[100%] tracking-normal mb-4">
            Favorite Cuisines
          </h2>
          <MultiSelect
            options={tripOptions}
            selected={selectedTrips}
            onSelectChange={setSelectedTrips}
            placeholder="Select destinations"
          />
        </div>
        <div className="w-full">
          <h2 className="text-white text-[13px] sm:text-[14px] leading-[100%] tracking-normal mb-4">
            Dining Style
          </h2>
          <MultiSelect
            options={tripOptions}
            selected={selectedTrips}
            onSelectChange={setSelectedTrips}
            placeholder="Select destinations"
          />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-white text-[13px] sm:text-[14px] leading-[100%] tracking-normal mb-3">
          Preferred Cities
        </h2>
        <MultiSelect
          options={tripOptions}
          selected={selectedTrips}
          onSelectChange={setSelectedTrips}
          placeholder="Select destinations"
        />
      </div>
    </div>
  );
};

export default PersonalPreferences;


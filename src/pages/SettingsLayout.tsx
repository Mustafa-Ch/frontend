




import { cn } from "@/lib/utils";
import { NavLink, Outlet } from "react-router-dom";

const SettingsLayout = () => {
  const settingsKeys = [
    { label: "Personal information", path: "personal-information" },
    { label: "Personal Preferences", path: "personal-preferences" },
    { label: "Notifications", path: "notification" },
    { label: "Calendar Itegration", path: "calendar-intigration" },
    { label: "Membership Billing", path: "membership-billing" },
  ];

  return (
    <div className="bg-[#0C0C0C] w-full min-h-screen px-4 sm:px-6 md:px-8 py-10">
      <div className="max-w-[1250px] w-full mx-auto">
        <h2 className="text-white font-semibold text-[20px] sm:text-[22px] md:text-[23px] leading-[100%] tracking-[0%]">
          Settings
        </h2>

        <div className="flex flex-wrap gap-2 sm:gap-3 mt-8 sm:mt-10">
          {settingsKeys.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                cn(
                  "px-3 h-[40px] rounded-[45px] border border-white/50 text-white flex justify-center items-center text-[11px] sm:text-[12px] leading-[100%] cursor-pointer text-center",
                  isActive && "bg-white text-black"
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="mt-8 sm:mt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;

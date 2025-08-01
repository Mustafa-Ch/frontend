import { Link, Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import man from "../assets/man.jpg";

function MainLayout() {
  const links = [
    { link: "Welcome", url: "/" },
    { link: "About Us", url: "" },
    { link: "Need to Know", url: "" },
    { link: "Booking Log", url: "" },
    { link: "Concierge", url: "" },
    { link: "My Preferences", url: "" },
    { link: "Settings", url: "/settings/personal-information" },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="relative flex flex-col md:flex-row h-screen w-full ">
        <div className="md:hidden flex justify-between items-center bg-black text-white p-4 w-full">
          <Sheet>
            <SheetTrigger>
              <Menu size={24} />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="p-0 w-[250px] bg-black text-white"
            >
              <div className="px-4 pb-4 pt-2">
                <div className="font-bold text-[20.82px] uppercase text-white mx-5 mb-5 ">
                  BOOKD
                </div>
                <nav>
                  <ul className="flex flex-col gap-4">
                    {links.map((link, index) => (
                      <Link to={link.url}>
                        <li
                          className="cursor-pointer text-[#C7C7C7] text-[13px]"
                          key={index}
                        >
                          {link.link}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          {/* Avatar on Mobile */}
          <div className="w-[40px] h-[40px] bg-[#1D1D1D] border border-white rounded-full shadow-[0px_1px_0px_0px_#383838] overflow-hidden">
            <img
              src={man}
              alt="User"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>


        <aside className="hidden md:flex flex-col justify-between items-start bg-black text-white p-4">
          <div>
            <div className="font-bold text-[20.82px] uppercase text-white mt-5 mb-8">
              BOOKD
            </div>
            <nav>
              <ul className="flex flex-col gap-4">
                {links.map((link, index) => (
                  <Link to={link.url}>
                    <li
                      className="cursor-pointer text-[#C7C7C7] text-[13px]"
                      key={index}
                    >
                      {link.link}
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
          </div>
          <button className="cursor-pointer text-[#C7C7C7] text-[13px]">
            Logout
          </button>
        </aside>

        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>

        {/* Desktop Avatar (already exists, keep it for md+) */}
        <div className="hidden md:block w-[45px] h-[45px] absolute top-[28px] right-[20px] bg-[#1D1D1D] border border-white rounded-full shadow-[0px_1px_0px_0px_#383838] z-50 overflow-hidden">
          <img
            src={man}
            alt="User"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;

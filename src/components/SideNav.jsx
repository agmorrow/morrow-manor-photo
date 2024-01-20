import { Link, useLocation } from "react-router-dom";
import { Popover } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Primary from "../assets/images/primary_logo.png";

const navigation = [
  { name: "Gallery", to: "/", current: true },
  { name: "About", to: "/about", current: false },
  { name: "Contact", to: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SideNav() {
  const location = useLocation();

  return (
    <>
      <div className="relative min-h-full">
        <Popover as="nav">
          {({ open, close }) => (
            <>
              <div className="md:flex flex-col bg-white">
                <div className="flex items-center justify-between px-4 py-4">
                  <div className="flex-shrink-0">
                    <Link to="/">
                      <img
                        className="h-20 w-20 md:h-32 md:w-32"
                        src={Primary}
                        alt="Your Company"
                      />
                    </Link>
                  </div>
                  <div className="md:hidden">
                    <Popover.Button className="relative inline-flex items-center justify-center p-2 text-black">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars2Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Popover.Button>
                  </div>
                </div>

                <div className={`md:flex md:flex-col ${open ? "block" : "hidden"}`}>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={classNames(
                        location.pathname === item.to
                          ? "border-b-2 border-black text-black"
                          : "text-black",
                        "px-3 py-2 text-lg font-medium"
                      )}
                      onClick={() => close()}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <div className="pt-2 border-t-2">
                    <a
                      href="https://morrowmanorphotography.pixieset.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-1"
                      >
                        {/* SVG path */}
                      </svg>
                      <div>Client gallery</div>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className={`fixed inset-0 z-40 bg-gray-300/60 backdrop-blur ${
                  open ? "block" : "hidden"
                }`}
                aria-hidden={!open}
              ></div>

              <Popover.Panel className="md:hidden">
                {/* Mobile menu content */}
                <div className="px-4 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={classNames(
                        location.pathname === item.to
                          ? "border-b-2 border-black text-black"
                          : "text-black",
                        "block px-3 py-2 text-base font-medium z-50"
                      )}
                      onClick={() => close()}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <div className="pt-2 border-t-2">
                    <a
                      href="https://morrowmanorphotography.pixieset.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-1"
                      >
                        {/* SVG path */}
                      </svg>
                      <div>Client gallery</div>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>
      </div>
    </>
  );
}

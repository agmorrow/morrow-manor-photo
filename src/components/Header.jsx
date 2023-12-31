import { Link, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
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

export default function Header() {
  const location = useLocation();


  return (
    <>
      <div className="relative min-h-full">
        <Disclosure as="nav" >
          {({ open, close }) => (
            <>
              <div className="relative z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between py-8">
                <div className="relative z-10 flex items-center gap-16">
                  <div className="flex-shrink-0">
                    <img
                      className="h-20 w-20 md:h-32 md:w-32"
                      src={Primary}
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
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
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-6">
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                      />
                    </svg>
                    <div>Client gallery</div>
                  </a>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center  p-2 text-black">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars2Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>

              <div
                className={`fixed inset-0 z-40 bg-gray-300/60 backdrop-blur ${
                  open ? "block" : "hidden"
                }`}
                aria-hidden={!open}
              ></div>
              <Disclosure.Panel className="relative md:hidden z-50">
                <div className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 shadow-2xl shadow-gray-900/20">
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
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}

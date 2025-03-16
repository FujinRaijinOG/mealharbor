"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import GlobalSearchModal from "../GlobalSearch";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const { data: session } = useSession();
  const pathUrl = usePathname();

  // Sticky menu handler
  const handleStickyMenu = () => {
    setStickyMenu(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full py-7 transition-all ${
          stickyMenu
            ? "bg-white py-4 shadow dark:bg-black"
            : ""
        }`}
      >
        <div className="relative mx-auto flex max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
          {/* Logo and Mobile Toggle */}
          <div className="flex w-full items-center justify-between xl:w-1/4">
            <Link href="/" aria-label="MealHarbor Home">
              <div className="flex items-center">
                <Image
                  src="/images/logo/logo-dark.svg"
                  alt="MealHarbor Logo - Dark Mode"
                  width={119}
                  height={30}
                  className="hidden dark:block"
                />
                <Image
                  src="/images/logo/logo-light.svg"
                  alt="MealHarbor Logo - Light Mode"
                  width={119}
                  height={30}
                  className="block dark:hidden"
                />
              </div>
            </Link>

            <button
              onClick={() => setNavigationOpen(!navigationOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={navigationOpen}
              className="block xl:hidden"
            >
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="block absolute right-0 h-full w-full">
                  <span
                    className={`absolute top-0 left-0 my-1 block h-0.5 rounded-sm bg-black dark:bg-white transition-all duration-200 ${
                      !navigationOpen ? "w-full delay-300" : "w-0"
                    }`}
                  ></span>
                  <span
                    className={`absolute top-0 left-0 my-1 block h-0.5 rounded-sm bg-black dark:bg-white transition-all duration-200 ${
                      !navigationOpen ? "w-full delay-400" : "w-0"
                    }`}
                  ></span>
                  <span
                    className={`absolute top-0 left-0 my-1 block h-0.5 rounded-sm bg-black dark:bg-white transition-all duration-200 ${
                      !navigationOpen ? "w-full delay-500" : "w-0"
                    }`}
                  ></span>
                </span>
              </span>
            </button>
          </div>

          {/* Navigation Menu */}
          <div
            className={`${
              navigationOpen
                ? "navbar visible mt-4 rounded-md bg-white p-7.5 shadow dark:bg-blacksection"
                : "invisible h-0 xl:visible xl:flex xl:h-auto"
            } flex w-full items-center justify-between xl:w-full xl:p-0 xl:shadow-none`}
          >
            <nav role="navigation">
              <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
                {menuData.map((menuItem) => (
                  <li key={menuItem.id} className={menuItem.submenu ? "group relative" : ""}>
                    {menuItem.submenu ? (
                      <>
                        <button
                          onClick={() => setDropdownToggler(!dropdownToggler)}
                          className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
                        >
                          {menuItem.title}
                          <svg
                            className="h-3 w-3 fill-waterloo group-hover:fill-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </button>
                        <ul className={`dropdown ${dropdownToggler ? "flex" : "hidden"} flex-col absolute top-full left-0 mt-2 rounded-md bg-white p-3 shadow dark:bg-black`}>
                          {menuItem.submenu.map((item) => (
                            <li key={item.id} className="hover:text-primary">
                              <Link href={item.path || "#"}>{item.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        href={menuItem.path}
                        className={pathUrl === menuItem.path ? "text-primary hover:text-primary" : "hover:text-primary"}
                      >
                        {menuItem.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="ml-auto mt-7 flex items-center gap-6 xl:mt-0">
              <button
                onClick={() => setSearchModalOpen(true)}
                className="hidden h-[38px] w-[38px] items-center justify-center rounded-full bg-white text-waterloo dark:bg-black sm:flex"
                aria-label="Open search"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 18 18"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_369_1884)">
                    <path d="M16.9347 15.3963L12.4816 11.7799C14.3168 9.26991 14.1279 5.68042 11.8338 3.41337C10.6194 2.19889 9.00003 1.52417 7.27276 1.52417C5.54549 1.52417 3.92617 2.19889 2.71168 3.41337C0.201738 5.92332 0.201738 10.0256 2.71168 12.5355C3.92617 13.75 5.54549 14.4247 7.27276 14.4247C8.91907 14.4247 10.4574 13.804 11.6719 12.6975L16.179 16.3409C16.287 16.4219 16.4219 16.4759 16.5569 16.4759C16.7458 16.4759 16.9077 16.3949 17.0157 16.26C17.2316 15.9901 17.2046 15.6122 16.9347 15.3963ZM7.27276 13.2102C5.86935 13.2102 4.5739 12.6705 3.57532 11.6719C1.52418 9.62076 1.52418 6.30116 3.57532 4.27701C4.5739 3.27843 5.86935 2.73866 7.27276 2.73866C8.67617 2.73866 9.97162 3.27843 10.9702 4.27701C13.0213 6.32815 13.0213 9.64775 10.9702 11.6719C9.99861 12.6705 8.67617 13.2102 7.27276 13.2102Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_369_1884">
                      <rect width="17.2727" height="17.2727" fill="white" transform="translate(0.363647 0.363647)" />
                    </clipPath>
                  </defs>
                </svg>
              </button>

              <ThemeToggler />

              {session ? (
                <>
                  <span className="text-sm font-medium">{session?.user?.name}</span>
                  <button
                    aria-label="Sign Out"
                    onClick={() => signOut()}
                    className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-sm text-white transition duration-300 hover:bg-primaryho"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/signin"
                    className="text-sm font-medium text-waterloo hover:text-primary"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-sm text-white transition duration-300 hover:bg-primaryho"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <GlobalSearchModal
        searchModalOpen={searchModalOpen}
        setSearchModalOpen={setSearchModalOpen}
      />
    </>
  );
};

export default Header;

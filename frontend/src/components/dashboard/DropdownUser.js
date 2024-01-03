import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import UserOne from "../images/user/user-01.png";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            Thomas Anree
          </span>
          <span className="block text-xs">UX Designer</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <img src={UserOne} alt="User" />
        </span>

        <svg
          className={`hidden fill-current sm:block ${
            dropdownOpen ? "rotate-180" : ""
          }`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
          <li>
            <Link
              to="/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 9.62499C8.42188 9.62499 6.35938 7.59687 6.35938 5.12187C6.35938 2.64687 8.42188 0.618744 11 0.618744C13.5781 0.618744 15.6406 2.64687 15.6406 5.12187C15.6406 7.59687 13.5781 9.62499 11 9.62499ZM11 2.16562C9.28125 2.16562 7.90625 3.50624 7.90625 5.12187C7.90625 6.73749 9.28125 8.07812 11 8.07812C12.7188 8.07812 14.0938 6.73749 14.0938 5.12187C14.0938 3.50624 12.7188 2.16562 11 2.16562Z"
                  fill=""
                />
                <path
                  d="M17.7719 21.4156H4.2281C3.5406 21.4156 2.9906 20.8656 2.9906 20.1781V17.0844C2.9906 13.7156 5.7406 10.9656 9.10935 10.9656H12.925C16.2937 10.9656 19.0437 13.7156 19.0437 17.0844V20.1781C19.0094 20.8312 18.4594 21.4156 17.7719 21.4156ZM4.53748 19.8687H17.4969V17.0844C17.4969 14.575 15.4344 12.5125 12.925 12.5125H9.07498C6.5656 12.5125 4.5031 14.575 4.5031 17.0844V19.8687H4.53748Z"
                  fill=""
                />
              </svg>
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 20.125C11 20.125 6.25 21.5 4.10938 17.8906C4.00938 17.7109 3.89062 17.4531 3.89062 17.2656V4.73438C3.89062 4.54688 4.00938 4.28906 4.10938 4.10938C6.25 0.5 11 1.875 11 1.875C11 1.875 15.75 0.5 17.8906 4.10938C17.9906 4.28906 18.1094 4.54688 18.1094 4.73438V17.2656C18.1094 17.4531 17.9906 17.7109 17.8906 17.8906C15.75 21.5 11 20.125 11 20.125ZM9.45312 13.4375C9.45312 14.4453 10.2656 15.25 11.2812 15.25C12.2891 15.25 13.1094 14.4453 13.1094 13.4375C13.1094 12.4297 12.2891 11.625 11.2812 11.625C10.2656 11.625 9.45312 12.4297 9.45312 13.4375ZM15.7344 9.70312L15.3281 9.29688C15.2656 9.23438 15.1406 9.23438 15.0781 9.29688L14.7812 9.59375C14.6875 9.6875 14.6875 9.84375 14.7812 9.9375L15.8906 11.0469C15.9844 11.1406 16.1406 11.1406 16.2344 11.0469L16.5312 10.75C16.625 10.6562 16.625 10.5 16.5312 10.4062L15.7344 9.70312ZM14.1406 8.10938L13.7344 7.70312C13.6719 7.64062 13.5469 7.64062 13.4844 7.70312L13.1875 8C13.0938 8.09375 13.0938 8.25 13.1875 8.34375L14.2969 9.45312C14.3906 9.54688 14.5469 9.54688 14.6406 9.45312L14.9375 9.15625C15.0312 9.0625 15.0312 8.90625 14.9375 8.8125L14.1406 8.10938ZM11.2812 0C9.89062 0 8.67188 1.21875 8.67188 2.60938C8.67188 4 9.89062 5.21875 11.2812 5.21875C12.6719 5.21875 13.8906 4 13.8906 2.60938C13.8906 1.21875 12.6719 0 11.2812 0Z"
                  fill=""
                />
              </svg>
              <span>Settings</span>
            </Link>
          </li>
        </ul>

        <div className="p-6.5">
          <Link
            to="/logout"
            className="block text-sm font-medium text-red duration-300 ease-in-out hover:text-primary lg:text-base"
          >
            Logout
          </Link>
        </div>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;

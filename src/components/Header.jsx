import React, { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  HiOutlineChatAlt,
  HiOutlineSearch,
  HiOutlineBell,
} from "react-icons/hi";

const Header = () => {
  return (
    <div className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4">
      <div className="inline-flex h-[42px] w-[300px] items-center gap-2 rounded-md border border-gray-200 px-4 text-gray-600">
        <HiOutlineSearch />
        <input
          type="text"
          placeholder="Search..."
          className="h-full w-full text-gray-900 outline-none"
        />
      </div>

      <div className="flex items-center gap-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`group inline-flex items-center rounded-sm p-2 text-gray-900 hover:text-gray-600 focus:outline-none active:bg-gray-100 ${open}
								`}
              >
                <HiOutlineChatAlt className="text-xl" />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-3 w-80 transform">
                  <div className="rounded-md bg-white px-2 py-4 shadow-md ring-1 ring-gray-200">
                    <strong className="font-semibold text-gray-900">
                      Messages
                    </strong>
                    <p className="mt-2 text-[14px] text-gray-600">
                      This is messages panel.
                    </p>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`group inline-flex items-center rounded-sm p-2 text-gray-900 hover:text-gray-600 focus:outline-none active:bg-gray-100 ${open}
								`}
              >
                <HiOutlineBell className="text-xl" />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-3 w-80 transform">
                  <div className="rounded-md bg-white px-2 py-4 shadow-md ring-1 ring-gray-200">
                    <strong className="font-semibold text-gray-900">
                      Notifications
                    </strong>
                    <p className="mt-2 text-[14px] text-gray-600">
                      This is notifications panel.
                    </p>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <Menu as="div" className="relative">
          <Menu.Button className="flex rounded-full focus:outline-none focus:ring-1 focus:ring-gray-100">
            <div
              className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/80x80?face")',
              }}
            >
              <span className="sr-only">Marc Backes</span>
            </div>
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white p-3 shadow-md ring-1 ring-gray-200 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`cursor-pointer rounded-md bg-red-500 px-4 py-2 text-white hover:bg-opacity-90 ${active}`}
                  >
                    Logout
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Header;

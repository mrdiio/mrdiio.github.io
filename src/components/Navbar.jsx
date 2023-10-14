import { useState } from 'react';

import { Dialog } from '@headlessui/react';
import { HiBars3, HiFaceSmile, HiXMark } from 'react-icons/hi2';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Education', href: '/#education' },
    // { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  const [navbarColor, setNavbarColor] = useState();

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavbarColor('bg-white shadow-sm transition duration-300');
    } else {
      setNavbarColor(null);
    }
  };

  window.addEventListener('scroll', changeNavbarColor);

  return (
    <div className="text-gray-600">
      <header
        className={`inset-x-0 top-0 z-50
        ${location.pathname === '/' ? 'fixed' : 'relative bg-white shadow-sm'}
        ${navbarColor}
      `}
      >
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex ">
            <Link
              to="/"
              className="-m-1.5 p-1.5 flex items-center gap-2 hover:text-yellow-400 transition duration-200"
            >
              <span className="sr-only">Your Company</span>

              <HiFaceSmile className="h-10 w-auto text-yellow-400" />
              <span className="font-semibold tracking-widest uppercase">
                Dio
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <HiBars3 className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <Link
                as="a"
                key={item.name}
                to={item.href}
                className="text-sm font-semibold uppercase hover:text-yellow-400 transition duration-200"
              >
                {/* {({ isActive }) => (
                  <span
                    className={
                      isActive ? 'border-b-4 border-yellow-400 py-2' : ''
                    }
                  >
                    {item.name}
                  </span>
                )} */}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </nav>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <HiXMark className="h-8 w-8" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {/* {({ isActive }) => (
                        <span className={isActive ? 'text-yellow-400' : ''}>
                          {item.name.slice(3)}
                        </span>
                      )} */}
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { cn } from "../utils/cn";
import { MdBlurLinear } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export const FloatingNav = ({ className }) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = scrollY.get();
      const direction = current - prevScrollY.current;

      if (current < 0) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }

      prevScrollY.current = current;
    };

    const unsubscribe = scrollY.onChange(handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  const handleMouseEnter = (item) => setDropdown(item);
  const handleMouseLeave = () => setDropdown(null);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed top-10 inset-x-0 mx-auto border shadow-md border-gray-400 shadow-[#7f56d9] dark:border-white/[0.2] rounded-full bg-transparent z-[5000] pr-2 pl-8 py-2 space-x-4",
            className
          )}
        >
          <div className="flex justify-between items-center">
            <div className="flex justify-start">
              <h1 className="text-2xl lg:text-3xl font-medium hidden lg:flex">
                <span className="text-[#7f56d9]">N</span>AV<span className="text-[#7f56d9]">B</span>AR
              </h1>
              <h1 className="text-2xl lg:text-3xl font-medium lg:hidden">
                <span className="text-[#7f56d9]">N</span>AV
              </h1>
            </div>

            <div className="hidden lg:flex">
              <ul className="flex space-x-4 px-1 font-semibold">
                <a
                  href="#home"
                  className="relative text-black flex items-center space-x-1 dark:hover:text-black hover:text-[#7f56d9]"
                >
                  <span className="px-3">Home</span>
                </a>

                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('products')}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="#products"
                    className="relative text-black flex items-center space-x-1 dark:hover:text-black hover:text-[#7f56d9]"
                  >
                    <span className="px-3">Products</span>
                    <IoIosArrowDown className="text-sm" />
                  </a>
                  {dropdown === 'products' && (
                    <ul className="absolute mt-2 w-44 p-2 shadow-lg bg-transparent border border-gray-400 border-dotted rounded">
                      <a
                        href="#product1"
                        className="block px-4 py-2 text-teal-600 hover:bg-gray-100"
                      >
                        Product 1
                      </a>
                      <a
                        href="#product2"
                        className="block px-4 py-2 text-teal-600 hover:bg-gray-100"
                      >
                        Product 2
                      </a>
                    </ul>
                  )}
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('resources')}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="#resources"
                    className="relative text-black flex items-center space-x-1 dark:hover:text-black hover:text-[#7f56d9]"
                  >
                    <span className="px-3">Resources</span>
                    <IoIosArrowDown className="text-sm" />
                  </a>
                  {dropdown === 'resources' && (
                    <ul className="absolute mt-2 w-44 p-2 shadow-lg bg-transparent border border-gray-400 border-dotted rounded">
                      <a
                        href="#resource1"
                        className="block px-4 py-2 text-teal-600 hover:bg-gray-100"
                      >
                        Resource 1
                      </a>
                      <a
                        href="#resource2"
                        className="block px-4 py-2 text-teal-600 hover:bg-gray-100"
                      >
                        Resource 2
                      </a>
                    </ul>
                  )}
                </div>

                <a
                  href="#pricing"
                  className="relative text-black flex items-center space-x-1 dark:hover:text-black hover:text-[#7f56d9]"
                >
                  <span className="px-3">Pricing</span>
                </a>
              </ul>
            </div>

            <div className="flex items-center">
              <div className="relative">
                <div
                  tabIndex={0}
                  role="button"
                  title="Menu"
                  className="lg:hidden m-2 p-2 bg-teal-700 text-white rounded hover:bg-teal-600 focus:outline-none"
                >
                  <MdBlurLinear className="text-2xl" />
                </div>
                <ul
                  tabIndex={0}
                  className="absolute right-0 mt-2 w-44 p-2 shadow-lg bg-transparent text-teal-600 rounded hidden focus-within:block border border-gray-400 border-dotted"
                >
                  <a
                    href="#home"
                    className="block px-4 py-2 text-teal-600 hover:bg-gray-100"
                  >
                    Home
                  </a>
                  <div className="relative">
                    <a
                      href="#products"
                      className="block px-4 py-2 text-black flex items-center space-x-1"
                    >
                      Products
                      <IoIosArrowDown className="text-sm" />
                    </a>
                    <ul className="absolute left-full top-0 mt-2 w-44 p-2 shadow-lg bg-transparent border border-gray-400 border-dotted rounded hidden">
                      <a
                        href="#product1"
                        className="block px-4 py-2 text-teal-600 hover:bg-gray-100"
                      >
                        Product 1
                      </a>
                      <a
                        href="#product2"
                        className="block px-4 py-2 text-teal-600 hover:bg-gray-100"
                      >
                        Product 2
                      </a>
                    </ul>
                  </div>
                  <div className="relative">
                    <a
                      href="#resources"
                      className="block px-4 py-2 text-black flex items-center space-x-1"
                    >
                      Resources
                      <IoIosArrowDown className="text-sm" />
                    </a>
                    <ul className="absolute left-full top-0 mt-2 w-44 p-2 shadow-lg bg-transparent border border-gray-400 border-dotted rounded hidden">
                      <a
                        href="#resource1"
                        className="block px-4 py-2 text-teal-600 hover:bg-gray-100"
                      >
                        Resource 1
                      </a>
                      <a
                        href="#resource2"
                        className="block px-4 py-2 text-teal-600 hover:bg-gray-100"
                      >
                        Resource 2
                      </a>
                    </ul>
                  </div>
                  <a
                    href="#pricing"
                    className="block px-4 py-2 text-teal-600 hover:bg-gray-100"
                  >
                    Pricing
                  </a>
                </ul>
              </div>
              <button className="text-[#7f56d9] border border-[#7f56d9] rounded-lg px-4 py-2 font-semibold mr-4">Log in</button>
              <button className="bg-[#7f56d9] rounded-lg px-4 py-2 font-semibold text-white">Sign up</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

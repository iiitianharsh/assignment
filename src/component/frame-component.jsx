import DropdownHeaderNavigationTri from "./dropdown-header-navigation-tri";
import NavigationActions from "./navigation-actions";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-[0rem] px-[2.187rem] box-border top-[0] z-[99] sticky max-w-full ${className}`}
    >
      <header className="flex-1 shadow-[2px_4px_20px_rgba(125,_110,_235,_0.5)] [backdrop-filter:blur(10px)] rounded-xl bg-kampkodetech-alto-1 flex flex-row flex-wrap items-center justify-between py-[0.625rem] px-[2.5rem] box-border max-w-full z-[1] text-center text-[2.5rem] text-kampkodetech-cornflower-blue font-kampkodetech-poppins-medium-16">
        <div className="w-[12.5rem] flex flex-col items-start justify-start gap-[0.625rem]">
          <a className="[text-decoration:none] w-[9.875rem] h-[3.75rem] relative flex items-center whitespace-nowrap text-[inherit]">
            <span className="[line-break:anywhere] w-full">
              <span>N</span> 
              <span className="text-grays-black">AV</span>
              <span>B</span>
              <span className="text-grays-black">AR</span>
            </span>
          </a>
          <img
            className="w-[9.875rem] h-[2.6rem] relative overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/kodekamp-transparent-header624670349ceb3c775b20png@2x.png"
          />
        </div>
        <div className="w-[55.875rem] flex flex-row flex-wrap items-center justify-between py-[0rem] pl-[0rem] pr-[0.125rem] box-border gap-[1.25rem] max-w-full text-[1rem] text-kampkodetech-tolopea">
          <div className="w-[25.25rem] flex flex-col items-start justify-start max-w-full mq1100:w-[0rem]">
            <div className="w-[4.375rem] hidden flex-col items-center justify-start pt-[0.062rem] px-[0rem] pb-[0.187rem] box-border">
              <div className="self-stretch h-[1.5rem] relative flex items-center justify-center">
                Features
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem] text-left text-grays-black font-text-lg-semibold mq1100:hidden">
              <div className="overflow-hidden flex flex-row items-center justify-center gap-[0.5rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder.svg"
                />
                <a className="[text-decoration:none] relative leading-[1.5rem] font-semibold text-[inherit] inline-block min-w-[2.875rem]">
                  Home
                </a>
                <img
                  className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder.svg"
                />
              </div>
              <DropdownHeaderNavigationTri
                text="Products"
                propMinWidth="4.375rem"
              />
              <DropdownHeaderNavigationTri text="Resources" />
              <div className="overflow-hidden flex flex-row items-center justify-center gap-[0.5rem]">
                <img
                  className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder.svg"
                />
                <a className="[text-decoration:none] relative leading-[1.5rem] font-semibold text-[inherit] inline-block min-w-[3.438rem]">
                  Pricing
                </a>
                <img
                  className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder.svg"
                />
              </div>
            </div>
          </div>
          <div className="hidden flex-col items-start justify-start py-[0rem] pl-[2.5rem] pr-[0rem]">
            <div className="w-[4.188rem] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-center justify-start pt-[0.062rem] px-[0rem] pb-[0.187rem]">
                <div className="self-stretch relative">Services</div>
              </div>
            </div>
          </div>
          <div className="hidden flex-col items-start justify-start py-[0rem] pl-[2.5rem] pr-[0rem]">
            <div className="w-[4.5rem] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-center justify-start pt-[0.062rem] px-[0rem] pb-[0.187rem]">
                <div className="self-stretch relative whitespace-nowrap">
                  About Us
                </div>
              </div>
            </div>
          </div>
          <div className="hidden flex-col items-start justify-start py-[0rem] pl-[2.5rem] pr-[0rem]">
            <div className="w-[5.563rem] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-center justify-start pt-[0.062rem] px-[0rem] pb-[0.187rem]">
                <div className="self-stretch relative whitespace-nowrap">
                  Contact Us
                </div>
              </div>
            </div>
          </div>
          <div className="hidden flex-col items-start justify-start py-[0rem] pl-[2.5rem] pr-[0rem] text-base-white">
            <div className="w-[5.188rem] flex flex-col items-center justify-start p-[0.5rem] box-border">
              <div className="self-stretch rounded bg-kampkodetech-cornflower-blue flex flex-row items-start justify-center py-[0.437rem] px-[0.625rem] whitespace-nowrap">
                <div className="flex-1 relative font-medium">Log in</div>
              </div>
            </div>
          </div>
          <NavigationActions />
        </div>
      </header>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;

import { useMemo } from "react";
import PropTypes from "prop-types";

const Button1 = ({
  className = "",
  iconTrailing = false,
  iconLeading = true,
  propBorder,
  propPadding,
  propBackgroundColor,
  propGap,
  propWidth,
  propFlex,
  arrowForward,
  propHeight,
  propWidth1,
  propOverflow,
  actionLabel,
  propFontSize,
  propColor,
  propTextDecoration,
  propDisplay,
  propMinWidth,
  placeholder,
  propHeight1,
  propWidth2,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      border: propBorder,
      padding: propPadding,
      backgroundColor: propBackgroundColor,
      gap: propGap,
      width: propWidth,
      flex: propFlex,
    };
  }, [
    propBorder,
    propPadding,
    propBackgroundColor,
    propGap,
    propWidth,
    propFlex,
  ]);

  const arrowForwardIconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth1,
      overflow: propOverflow,
    };
  }, [propHeight, propWidth1, propOverflow]);

  const actionLabelStyle = useMemo(() => {
    return {
      fontSize: propFontSize,
      color: propColor,
      textDecoration: propTextDecoration,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propFontSize, propColor, propTextDecoration, propDisplay, propMinWidth]);

  const placeholderIconStyle = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth2,
    };
  }, [propHeight1, propWidth2]);

  return (
    <button
      className={`cursor-pointer border-gray-300 border-[1px] border-solid py-[0.875rem] px-[1.687rem] bg-base-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg overflow-hidden flex flex-row items-center justify-center gap-[0.75rem] ${className}`}
      style={buttonStyle}
    >
      {iconLeading && (
        <img
          className="h-[1.5rem] w-[1.5rem] relative"
          alt=""
          src={arrowForward}
          style={arrowForwardIconStyle}
        />
      )}
      <div
        className="relative text-[1.125rem] leading-[1.75rem] font-semibold font-text-lg-semibold text-gray-700 text-left"
        style={actionLabelStyle}
      >
        {actionLabel}
      </div>
      {iconTrailing && (
        <img
          className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
          alt=""
          src={placeholder}
          style={placeholderIconStyle}
        />
      )}
    </button>
  );
};

Button1.propTypes = {
  className: PropTypes.string,
  iconTrailing: PropTypes.bool,
  iconLeading: PropTypes.bool,
  arrowForward: PropTypes.string,
  actionLabel: PropTypes.string,
  placeholder: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
  propPadding: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propGap: PropTypes.any,
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth1: PropTypes.any,
  propOverflow: PropTypes.any,
  propFontSize: PropTypes.any,
  propColor: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propHeight1: PropTypes.any,
  propWidth2: PropTypes.any,
};

export default Button1;

import React from "react";

const getViewBox = name => {
  switch (name) {
    case "phone":
      return "0 0 32 33";
    case "message":
      return "0 0 38 34";
    case "envelope":
      return "0 0 40 26";
    case "trash":
      return "0 0 13.5 17.5";
    case "wifi":
      return "0 0 12 9";
    default:
      return "0 0 32 32";
  }
};

const getPath = (name, props) => {
  switch (name) {
    case "close":
      return (
        <path
          {...props}
          d="9.55 1.49 8.06 0 4.77 3.29 1.49 0 0 1.49 3.29 4.77 0 8.06 1.49 9.55 4.77 6.26 8.06 9.55 9.55 8.06 6.26 4.77 9.55 1.49"
        />
      );
    case "message":
      return (
        <path
          {...props}
          d="../../public/images/svg_icons/close.svg"
        />
      );
    case "envelope":
      return (
        <path
          {...props}
          d="../../public/images/svg_icons/close.svg"
        />
      );
    case "trash":
      return (
        <path
          {...props}
          d="../../public/images/svg_icons/close.svg"
        />
      );
    case "wifi":
      return (
        <path
          {...props}
          d="../../public/images/svg_icons/close.svg"
        />
      );
    default:
      return <path />;
  }
};

const SVGIcon = ({
  name = "",
  style = {},
  fill = "#000",
  viewBox = "",
  width = "100%",
  className = "",
  height = "100%"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, { fill })}
  </svg>
);

export default SVGIcon;

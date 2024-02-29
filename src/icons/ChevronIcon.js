const ChevronIcon = ({ width, height }) => {
  const svgStyles = {
    width: width || '1.4rem',  // default width if not provided
    height: height || '1.35rem',  // default height if not provided
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#7c6f5a"
      style={svgStyles}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

export default ChevronIcon;

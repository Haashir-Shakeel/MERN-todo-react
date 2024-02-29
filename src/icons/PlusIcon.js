import React from 'react';

const PlusIcon = ({ width, height }) => {
  const svgStyles = {
    width: width || '1.4rem',  // default width if not provided
    height: height || '1.4rem',  // default height if not provided
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
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

export default PlusIcon;

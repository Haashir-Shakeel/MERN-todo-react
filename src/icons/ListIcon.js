const ListIcon = ({ width, height }) => {
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
      stroke="#867963"
      style={svgStyles}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
      />
    </svg>
  );
};

export default ListIcon;

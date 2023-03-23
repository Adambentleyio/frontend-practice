function BlobSvg1() {
  return (
    <svg
      className="absolute hidden md:block sm:h-[50rem] sm:z-0 sm:opacity-40 sm:-right-0"
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop
            id="stop1"
            stop-color="rgba(226.682, 203.336, 161.468, 1)"
            offset="0%"
          ></stop>
          <stop
            id="stop2"
            stop-color="rgba(231, 209, 173, 0.7)"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M25.7,-5C25.7,6,12.8,12.1,1.2,12.1C-10.5,12.1,-21,6,-21,-5C-21,-16.1,-10.5,-32.2,1.2,-32.2C12.8,-32.2,25.7,-16.1,25.7,-5Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        stroke-width="0"
        stroke="url(#sw-gradient)"
      ></path>
    </svg>
  );
}

export default BlobSvg1;

import Script from "next/script";

export default function Blob() {
  return (
    <>
      <svg
        id="visual"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <g transform="translate(449.72884373066546 280.3213764180878)">
          <path
            id="blob1"
            d="M141.2 -124.9C176.4 -106.1 193.7 -53 185.6 -8.1C177.4 36.8 143.9 73.5 108.7 108.9C73.5 144.2 36.8 178.1 5.1 173C-26.5 167.9 -53 123.7 -89.7 88.4C-126.4 53 -173.2 26.5 -184.3 -11.1C-195.5 -48.8 -170.9 -97.6 -134.2 -116.4C-97.6 -135.2 -48.8 -124.1 2.1 -126.2C53 -128.4 106.1 -143.7 141.2 -124.9"
            className="fill-primary"
          ></path>
        </g>
        <g
          transform="translate(445.586381961425 323.50854285132095)"
          className="invisible"
        >
          <path
            id="blob2"
            d="M84.4 -90.5C115.7 -53 151.9 -26.5 161.1 9.3C170.4 45 152.7 90 121.4 112.5C90 135 45 135 4.8 130.2C-35.4 125.4 -70.7 115.7 -100.9 93.2C-131 70.7 -156 35.4 -154.7 1.3C-153.4 -32.8 -125.9 -65.5 -95.7 -103C-65.5 -140.5 -32.8 -182.8 -3.1 -179.6C26.5 -176.5 53 -128 84.4 -90.5"
            className="fill-primary"
          ></path>
        </g>
      </svg>
      <Script
        src="https://cdn.jsdelivr.net/npm/kute.js@2.2.4/dist/kute.min.js"
        onLoad={() => {
          const tween = window.KUTE.fromTo(
            "#blob1",
            { path: "#blob1" },
            { path: "#blob2" },
            { repeat: 999, duration: 3000, yoyo: true }
          );
          tween.start();
        }}
      />
    </>
  );
}

import * as Pr from "./pr";
import MarkerDrawer from "./marker-drawer";

export const Map = () => {
  return (
    <div className="w-[1000px] h-[1000px]">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width={"100%"}
        height={"100%"}
        viewBox="0 0 800 600"
      >

        <defs>
          <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{stopColor: "#0d9387", stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: "#18a79b", stopOpacity: 1}} />
          </radialGradient>
        </defs>


        <style type="text/css">
          {`.st0{fill:#5cb9b1;stroke:#FFFFFF;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray: 5;stroke-dashoffset: 0;}
          .st0:hover{fill: url(#gradient);transition: fill 0.7s ease, stroke-width 0.7s ease;stroke-width:2;stroke-dasharray: 0;}
          @keyframes pulse {
            0% {
                r: 8;
              opacity: 0;
            }
            50% {
                r: 9;
                opacity: 0.7;
            }
            100% {
                r: 17;
                opacity: 0;
            }
          }
          
          .stM {
            z-index:100;
            animation: pulse 2s infinite ease-in-out;
          }

          .st1{font-family:'Roboto-Regular';}
          .st2{font-size:14px;}`}
        </style>
            
          <Pr.PrCentral />
          <Pr.PrEastern />
          <Pr.PrNorthCentral />
          <Pr.PrNorthWestern />
          <Pr.PrNorthern />
          <Pr.PrSabaragamuwa />
          <Pr.PrSouthern />
          <Pr.PrUva />
          <Pr.PrWestern />
          <MarkerDrawer/>
      </svg>
    </div>
  );
};

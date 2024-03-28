import * as Pr from "./province";
import MarkerDrawer from "./marker-drawer";

interface MapProps {
  state: string;
  updateState: (newValue: string) => void;
}

export const Map: React.FC<MapProps> = ({ state, updateState }) => {

  const handlePrClick = (prName: string) => {
    updateState(prName);
  };

  return (
      <svg 
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width={"100%"}
        height={"100%"}
        viewBox="0 0 800 600"
        className="w-[1000px] h-[1000px]"
      >


        <style type="text/css">
          {`.st0{fill:#32738d;}
          .st0:hover{fill: #336274;}
          .st0-active{fill: #2c5565;}
          .st0-stroke{stroke:#FFF;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray: 5;stroke-dashoffset: 0;}
          .st0-stroke:hover{stroke:#FFF;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray: 5;stroke-dashoffset: 0;}
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
            
        <g onClick={() => handlePrClick('Central')} className={state === 'Central' ? 'st0-active' : 'st0'}>
        <Pr.PrCentral />
      </g>
      <g onClick={() => handlePrClick('Eastern')} className={state === 'Eastern' ? 'st0-active' : 'st0'}>
        <Pr.PrEastern />
      </g>
      <g onClick={() => handlePrClick('NorthCentral')} className={state === 'NorthCentral' ? 'st0-active' : 'st0'}>
        <Pr.PrNorthCentral />
      </g>
      <g onClick={() => handlePrClick('NorthWestern')} className={state === 'NorthWestern' ? 'st0-active' : 'st0'}>
        <Pr.PrNorthWestern />
      </g>
      <g onClick={() => handlePrClick('Northern')} className={state === 'Northern' ? 'st0-active' : 'st0'}>
        <Pr.PrNorthern />
      </g>
      <g onClick={() => handlePrClick('Sabaragamuwa')} className={state === 'Sabaragamuwa' ? 'st0-active' : 'st0'}>
        <Pr.PrSabaragamuwa />
      </g>
      <g onClick={() => handlePrClick('Southern')} className={state === 'Southern' ? 'st0-active' : 'st0'}>
        <Pr.PrSouthern />
      </g>
      <g onClick={() => handlePrClick('Uva')} className={state === 'Uva' ? 'st0-active' : 'st0'}>
        <Pr.PrUva />
      </g>
      <g onClick={() => handlePrClick('Western')} className={state === 'Western' ? 'st0-active' : 'st0'}>
        <Pr.PrWestern />
      </g>

          {/* below is the marker drawer which stores all the marker */}

          <MarkerDrawer/>
      </svg>
  );
};

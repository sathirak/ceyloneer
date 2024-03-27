import Link from "next/link";

interface MarkerProps{
    cx:number;
    cy:number;
    href:string;
    title:string;
}


const Marker:React.FC<MarkerProps> =({ cx, cy, href, title })=>{

    return(
        <Link href={href} title={title} >
        <circle className="stM" cx={cx} cy={cy} r="8" fill="#fff" stroke="#FFFFFF" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle className="" cx={cx} cy={cy} r="8" fill="#fff" stroke="#FFFFFF" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Link>
    )
}

export default Marker;
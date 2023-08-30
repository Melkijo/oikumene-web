import heroDown from "@/assets/heroDownIcon.png";
import Image from "next/image";

export function Star(props: { color: string; className?: string }) {
   return (
      <svg
         className={props.className}
         width="66"
         height="65"
         viewBox="0 0 66 65"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M32.7168 32.7168H1L24.7876 24.7876L32.7168 1V32.7168Z"
            fill={props.color}
            stroke={props.color}
            stroke-width="0.566372"
         />
         <path
            d="M33.2832 32.7168H65L41.2124 24.7876L33.2832 1V32.7168Z"
            fill={props.color}
            stroke={props.color}
            stroke-width="0.566372"
         />
         <path
            d="M32.7168 32.7168H1L24.7876 40.646L32.7168 64.4336V32.7168Z"
            fill={props.color}
            stroke={props.color}
            stroke-width="0.566372"
         />
         <path
            d="M33.2832 32.7168H65L41.2124 40.646L33.2832 64.4336V32.7168Z"
            fill={props.color}
            stroke={props.color}
            stroke-width="0.566372"
         />
      </svg>
   );
}

export function Sun(props: { color: string; className?: string }) {
   return (
      <svg
         className={props.className}
         xmlns="http://www.w3.org/2000/svg"
         width="49"
         height="49"
         viewBox="0 0 49 49"
         fill="none"
      >
         <rect x="22" width="5" height="27" fill={props.color} />
         <rect x="22" y="22" width="5" height="27" fill={props.color} />
         <rect
            x="21"
            y="24.5352"
            width="5"
            height="27"
            transform="rotate(-45 21 24.5352)"
            fill={props.color}
         />
         <rect
            width="5"
            height="27"
            transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 27.6274 24.5352)"
            fill={props.color}
         />
         <rect
            x="28.6274"
            y="25.0918"
            width="5"
            height="27"
            transform="rotate(135 28.6274 25.0918)"
            fill={props.color}
         />
         <rect
            width="5"
            height="27"
            transform="matrix(0.707107 0.707107 0.707107 -0.707107 21 25.0918)"
            fill={props.color}
         />
         <rect
            x="27"
            y="22"
            width="5"
            height="27"
            transform="rotate(90 27 22)"
            fill={props.color}
         />
         <rect
            x="49"
            y="22"
            width="5"
            height="27"
            transform="rotate(90 49 22)"
            fill={props.color}
         />
      </svg>
   );
}

export function HeroDown(props: { className?: string }) {
   return <Image src={heroDown} alt="" className={props.className} />;
}

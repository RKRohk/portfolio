import { MutableRefObject } from "react";

interface DownArrowPropsType {
  nextRef: MutableRefObject<HTMLDivElement>;
  text: string;
}
const DownArrow: React.FC<DownArrowPropsType> = (props) => {
  return (
    <>
      <div
        className="sm:right-2 right-2 sm:pr-10 bottom-12 absolute flex items-center cursor-pointer sm:space-x-2 sm:bottom-2"
        onClick={(e) => {
          if (props.nextRef && props.nextRef.current) {
            const current = props.nextRef.current;
            console.log(current);
            if (current)
              window.scrollTo({
                behavior: "smooth",
                top: current.offsetTop,
              });
          }
        }}
      >
        <div className="animate-bounce inline-block sm:mr-0 mr-1 font-yellowtail font-semibold">
          {props.text}
        </div>
        <svg
          className="animate-bounce w-auto h-6 m-0 text-amber-900 sm:right-5 sm:m-14"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </>
  );
};

export default DownArrow;

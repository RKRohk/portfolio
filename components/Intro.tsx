import { MutableRefObject } from "react";
import Projects from "./Projects/Projects";

const Intro: React.FC<{ projectsRef: MutableRefObject<HTMLDivElement> }> = (
  props
) => {
  return (
    <div className="bg-gray-900 relative flex h-screen w-auto font-sans  items-center text-white ">
      <div className="mx-auto">
        <h1 className="text-white font-semibold text-center self-center md:text-6xl text-3xl mx-auto">
          Rohan Kakar
        </h1>
        <ul className="mt-5 list-disc">
          <li className="md:mt-3 text-sm flex-wrap w-60 md:w-auto">
            Full Stack Mobile and Web Application Developer
          </li>
          <li className="text-sm md:w-auto">Docker and Kubernetes Developer</li>
          <li className="text-sm">ChatBot Developer</li>
        </ul>
      </div>
      <div
        className="sm:right-2 right-2 sm:pr-10 bottom-12 absolute flex items-center cursor-pointer sm:space-x-2 sm:bottom-2"
        onClick={(e) => {
          if (props.projectsRef && props.projectsRef.current) {
            const current = props.projectsRef.current;
            if (current)
              window.scrollTo({
                behavior: "smooth",
                top: current.offsetTop,
              });
          }
        }}
      >
        <div className="animate-bounce inline-block sm:mr-0 mr-1">
          My Skills
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
    </div>
  );
};

export default Intro;

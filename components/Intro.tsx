import { MutableRefObject } from "react";
import Projects from "./Projects/Projects";
import DownArrow from "./DownArrow";

const Intro: React.FC<{ projectsRef?: MutableRefObject<HTMLDivElement> }> = (
  props
) => {
  return (
    <div className="bg-gray-900 relative flex h-screen w-auto font-sans  items-center text-white ">
      <div className="mx-auto">
        <h1 className="text-gray-100  font-semibold text-center md:text-6xl text-3xl">
          Rohan Kakar
        </h1>
        <ul className="mt-5 list-disc font-yellowtail text-md">
          <li className="md:mt-3 flex-wrap w-60 md:w-auto">
            Full Stack Mobile and Web Application Developer
          </li>
          <li className=" md:w-auto">Docker and Kubernetes Developer</li>
          <li className="">ChatBot Developer</li>
        </ul>
      </div>
      <DownArrow nextRef={props.projectsRef} text={"My Projects"} />
    </div>
  );
};

export default Intro;

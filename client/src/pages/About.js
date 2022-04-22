import React from "react";

function About() {
  return (
    <div className="w-full min-h-full bg-[rgb(10,25,47)] pt-24">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center min-h-full">
        <h2 className="p-4 text-left sm:text-center text-[#ccd6f6] text-2xl">
          About Me
        </h2>
        <p className="px-4 text-left sm:text-center text-2xl text-[#ccd6f6] tracking-tighter">
          Hi. I'm Andi, nice to meet you. Please take a look around.
        </p>
        <p className="p-4  text-justify sm:text-justify text-[#ccd6f6] tracking-wide">
          As a full stack programmer, I am passionate about building excellent
          software that improves the lives of those around me. I specialize in
          creating software for clients ranging from individuals and
          small-businesses all the way to large enterprise corporations. I'm
          implementation which includes coding and testing in my project. If you
          think we can work together on your project, although it’s still just
          an Idea. Please, don’t hesitate to contact me.
        </p>
        <p className="p-4 max-w-[700px] text-[#ccd6f6] tracking-tighter">
          Frontend :
        </p>
        <p className="px-4 max-w-[700px] text-[#ccd6f6] tracking-wide">
          - React JS & Next JS
        </p>
        <p className="px-4 max-w-[700px] text-[#ccd6f6] tracking-wide">
          - Vue JS
        </p>
        <p className="p-4 max-w-[700px] text-[#ccd6f6] tracking-wide">
          Styling:
        </p>
        <p className="px-4 max-w-[700px] text-[#ccd6f6] tracking-wide">
          - Tailwind
        </p>
        <p className="px-4 max-w-[700px] text-[#ccd6f6] tracking-wide">
          - Bootstrap
        </p>

        <p className="p-4 max-w-[700px] text-[#ccd6f6] tracking-tighter">
          Backend :
        </p>
        <p className="px-4 max-w-[700px] text-[#ccd6f6] tracking-wide">
          - Node JS
        </p>
        <p className="px-4 max-w-[700px] text-[#ccd6f6] tracking-wide">
          - Express JS
        </p>
        <p className="px-4 max-w-[700px] text-[#ccd6f6] tracking-wide">
          - Nest JS
        </p>
        <p className="p-4 max-w-[700px] text-[#ccd6f6] tracking-tighter">
          ORM :
        </p>

        <p className="px-4 max-w-[700px] text-[#ccd6f6] tracking-wide">
          - Typeorm
        </p>
        <p className="p-4 max-w-[700px] text-[#ccd6f6] tracking-tighter">
          Database:
        </p>

        <p className="px-4 max-w-[700px] text-[#ccd6f6] tracking-wide">
          - PostgreSQL
        </p>
        <p className="px-4 pb-4 max-w-[700px] text-[#ccd6f6] tracking-wide">
          - MySQL
        </p>
      </div>
    </div>
  );
}
export default About;

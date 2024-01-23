import Chapel from "/chapel.jpeg";
import Beach from "/beach.jpeg";
import { annotate } from "rough-notation";
import { useEffect } from "react";

const Hero = ({ darkMode }) => {
  const classes = `
  absolute
  xs:w-3/4
  w-5/6
  top-1/2
  left-[8.3%]
  xs:left-[12.5%]
  mix-blend-screen
  dark:mix-blend-hard-light
  text-center
  -translate-y-1/2
  py-1
  xs:py-2
  md:w-1/2
  md:left-1/4
  `;

  useEffect(() => {
    const e = document.querySelectorAll("#main_header");

    e.forEach((item) => {
      const annotation = annotate(item, {
        type: "highlight",
        color: darkMode ? "black" : "white",
        multiline: true,
      });
      annotation.show();
    });
  }, [darkMode]);

  return (
    <div className='relative pb-2'>
      <img
        src={Beach}
        className='dark:grayscale sm:aspect-[3.2/1] aspect-[2/1] object-cover'
        alt='Mike Francis - Junior Full Stack Developer'
      />
      <div className={classes}>
        <h1 id='main_header' className='text-4xl sm:text-4xl  md:text-6xl'>
          Mike Francis
        </h1>
        <h2 id='main_header' className='pb-2 text-xl xs:text-2xl md:text-3xl'>
          Junior Full Stack Developer
        </h2>
      </div>
    </div>
  );
};

export default Hero;

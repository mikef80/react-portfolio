import GithubMark from "/github-mark.png";
import GithubMarkWhite from "/github-mark-white.png";
import LinkedInLogo from "/linkedin.png";
import SunIcon from "/sun.png";
import MoonIcon from "/half-moon.png";
import Chapel from "/chapel.jpeg";
import Beach from "/beach.jpeg";
import { useEffect, useState } from "react";
import Hero from "./Hero";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    // set something in localStorage to remember darkmode preferences
    setDarkMode(() => !darkMode);
    const html = document.querySelector("html");
    html.classList.toggle("dark");
  };

  const classes = `
  absolute
  w-3/4
  top-1/2
  left-[12.5%]
  mix-blend-screen
  text-center
  -translate-y-1/2
  bg-white
  py-1
  xs:py-2
  sm:w-1/2
  sm:left-1/4
  `;

  return (
    <header className='flex flex-col items-center pb-2'>
      {/* <div className='relative pb-2'>
        <img
          src={Beach}
          className=' sm:aspect-video sm:aspect-[3.2/1] aspect-[2/1] object-cover'
          alt=''
        />

        <div className={classes}>
          <h1 className='text-3xl sm:text-4xl  md:text-6xl'>Mike Francis</h1>

          <h2 className='pb-2 text-xl  sm:text-2xl md:text-3xl'>
            Junior Full Stack Developer
          </h2>
        </div>
      </div> */}
      
      <div className='flex gap-7 pb-2'>
        <a href='https://github.com/mikef80'>
          <img
            src={darkMode ? GithubMarkWhite : GithubMark}
            alt='Github'
            className='w-8'
          />
        </a>
        <a href='https://www.linkedin.com/in/mpfrancis/'>
          <img src={LinkedInLogo} alt='LinkedIn' />
        </a>
        <button onClick={() => toggleDarkMode()}>
          {/* <p className="hidden">{darkMode ? 'toggle light mode' : 'toggle dark mode'}</p> */}
          <img
            src={darkMode ? MoonIcon : SunIcon}
            alt='toggle dark mode on and off'
          />
        </button>
      </div>
    </header>
  );
};

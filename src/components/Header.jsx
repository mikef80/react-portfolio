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

  return (
    <>
      <Hero darkMode={darkMode} />
      <header className='flex flex-col items-center pb-2'>
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
            <img
              src={darkMode ? MoonIcon : SunIcon}
              alt='toggle dark mode on and off'
            />
          </button>
        </div>
      </header>
    </>
  );
};

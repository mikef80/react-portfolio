import GithubMark from "/github-mark.png";
import GithubMarkWhite from "/github-mark-white.png";
import LinkedInLogo from "/linkedin.png";
import SunIcon from "/sun.png";
import MoonIcon from "/half-moon.png";
import { useEffect, useState } from "react";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    // set something in localStorage to remember darkmode preferences
    setDarkMode(() => !darkMode);
    const html = document.querySelector("html");
    html.classList.toggle("dark");
  };

  return (
    <div className='flex flex-col items-center py-2'>
      <h1 className='text-4xl pb-2'>Mike Francis</h1>
      <h2 className='pb-2'>Junior Full Stack Developer</h2>
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
          <img src={darkMode ? MoonIcon : SunIcon} alt='' />
        </button>
      </div>
    </div>
  );
};

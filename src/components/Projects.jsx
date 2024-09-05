import { useEffect, useState, useContext } from "react";
import { octoFetch } from "../util/utils";
import Loading from "./Loading";
import CodeDark from "/code-dark.png";
import Code from "/code.png";
import WebDark from "/world-wide-web-dark.png";
import Web from "/world-wide-web.png";
import { DarkModeContext } from "../util/DarkModeContext";

const Projects = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [repos, setRepos] = useState([
    {
      id: 744495937,
      name: "react-portfolio",
      description:
        "💼 My portfolio repo. A place to showcase the key projects from my bootcamp with Northcoders, as well as other projects I am working on.",
      url: "https://github.com/mikef80/react-portfolio",
      languages: {
        JavaScript: 9737,
        HTML: 1127,
        CSS: 58,
        total: 10922,
      },
    },
  ]);

  // const [isLoading, setIsLoading] = useState(false);

  const darkModeStyle = {
    filter: "drop-shadow(0px 1000px 0 white)",
    transform: "translateY(-1000px)",
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    octoFetch()
      .then((arr) => setRepos(arr))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <div className='px-2 pb-9 flex flex-col grow'>
      <h3 className='text-2xl pb-2'>Projects</h3>
      {isLoading ? (
        <Loading />
      ) : (
        <ul className='flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-y-5'>
          {repos.map(({ id, name, description, url, homepage }) => {
            return (
              <li
                key={id}
                className={`border-b-[1px] border-gray-300 p-4 last-of-type:border-0 md:last-of-type:border-b-[1px] `}>
                {/* <a href={url}> */}
                <div className='flex justify-between mb-1'>
                  <h4 className='text-xl'>{name}</h4>
                  <div className='flex justify-between overflow-hidden gap-2'>
                    {homepage && (
                      <a href={homepage} target='_blank'>
                        <img
                          src={Web}
                          alt=''
                          style={darkMode ? darkModeStyle : {}}
                          className='h-7'
                        />
                      </a>
                    )}
                    <a href={url} target='_blank'>
                      <img
                        src={Code}
                        alt=''
                        style={darkMode ? darkModeStyle : {}}
                        className='h-7'
                      />
                    </a>
                  </div>
                </div>
                <p className='text-gray-500 dark:text-gray-400'>{description}</p>
                {/* </a> */}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Projects;

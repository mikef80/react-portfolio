import { useEffect, useState } from "react";
import { octoFetch } from "../util/utils";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    octoFetch().then((arr) => setRepos(arr));
  }, []);

  return (
    <div className='px-2 pb-2'>
      <h3 className='text-2xl pb-2'>Projects</h3>
      <ul>
        {repos.map(({ name, description, url }) => {
          return (
            <li className='border-[1px] border-gray-400 rounded-md p-4'>
              <a href={url}>
                <h4 className="text-xl pb-1">{name}</h4>
                <p className="text-gray-500">{description}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;

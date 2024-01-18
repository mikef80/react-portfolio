import { useEffect, useState } from "react";
import { octoFetch } from "../util/utils";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    octoFetch()
      .then((arr) => setRepos(arr))
      .then(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className='px-2 pb-2'>
        <h3 className='text-2xl pb-2'>Projects</h3>
        <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse'>
          Loading...
        </p>
      </div>
    );
  }

  if (repos.length) {
    return (
      <div className='px-2 pb-9'>
        <h3 className='text-2xl pb-2'>Projects</h3>
        <ul className='flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-y-5'>
          {repos.map(({ id, name, description, url }) => {
            return (
              <li
                key={id}
                className={`border-b-[1px] border-gray-300 p-4 last-of-type:border-0 md:last-of-type:border-b-[1px] `}>
                <a href={url}>
                  <h4 className='text-xl pb-1'>{name}</h4>
                  <p className='text-gray-500'>{description}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Projects;

import GitHubLogo from "/github.png";
import LinkedInLogo from "/linkedin.png";

export const Header = () => {
  const toggleDarkMode = () => {
    const html = document.querySelector("html");
    html.classList.toggle("dark");
  };

  return (
    <div className='flex flex-col items-center py-2'>
      <h1 className='text-4xl pb-2'>Mike Francis</h1>
      <h2 className='pb-2'>Junior Full Stack Developer</h2>
      <div className='flex gap-5 pb-2'>
        <a href='https://github.com/mikef80'>
          <img src={GitHubLogo} alt='Github' />
        </a>
        <a href='https://www.linkedin.com/in/mpfrancis/'>
          <img src={LinkedInLogo} alt='LinkedIn' />
        </a>
        <button onClick={() => toggleDarkMode()}>toggle dark mode</button>
      </div>
    </div>
  );
};

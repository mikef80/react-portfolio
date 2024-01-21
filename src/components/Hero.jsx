import Chapel from "/chapel.jpeg";
import Beach from "/beach.jpeg";

const Hero = () => {
  const classes = `
  absolute
  w-3/4
  top-1/2
  left-[12.5%]
  mix-blend-screen
  dark:mix-blend-hard-light
  text-center
  -translate-y-1/2
  bg-white
  dark:bg-black
  dark:bg-opacity-80
  bg-opacity-90
  py-1
  xs:py-2
  sm:w-1/2
  sm:left-1/4
  `;

  return (
    <div className='relative pb-2'>
      <img
        src={Beach}
        className='dark:grayscale sm:aspect-video sm:aspect-[16/9] aspect-[2/1] object-cover'
        alt='Mike Francis - Junior Full Stack Developer'
      />
      <div className={classes}>
        <h1 className='text-3xl sm:text-4xl  md:text-6xl'>Mike Francis</h1>
        <h2 className='pb-2 text-xl  sm:text-2xl md:text-3xl'>
          Junior Full Stack Developer
        </h2>
      </div>
    </div>
  );
};

export default Hero;

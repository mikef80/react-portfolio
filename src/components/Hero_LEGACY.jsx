import Chapel from "/chapel.jpeg";
import Beach from "/beach.jpeg";

const Hero = () => {
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
  bg-white
  dark:bg-black
  dark:bg-opacity-80
  bg-opacity-90
  py-1
  xs:py-2
  md:w-1/2
  md:left-1/4
  `;

  return (
    <div className='relative pb-2'>
      <img
        src={Beach}
        className='dark:grayscale sm:aspect-[3.2/1] aspect-[2/1] object-cover'
        alt='Mike Francis - Junior Full Stack Developer'
      />
      <div className={classes}>
        <h1 className='text-4xl sm:text-4xl  md:text-6xl'>Mike Francis</h1>
        <h2 className='pb-2 text-xl xs:text-2xl md:text-3xl'>
          Junior Full Stack Developer
        </h2>
      </div>
    </div>
  );
};

export default Hero;

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Intro } from "./components/Intro";
import Projects from "./components/Projects";
import Hero from "./components/Hero";

export const App = () => {
  return (
    <div>
      <main className='max-w-[540px] mx-auto md:max-w-[768px] lg:max-w-[1000px]'>
        <Hero />
        <Header />
        <Intro />
        <Projects />
        <Footer />
      </main>
    </div>
  );
};

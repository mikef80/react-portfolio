import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Intro } from "./components/Intro";
import Projects from "./components/Projects";


export const App = () => {
  return (
    <div className='relative min-h-screen'>
      <main className='max-w-[540px] mx-auto md:max-w-[768px] lg:max-w-[1000px] flex flex-col min-h-screen'>
        <Header />
        <Intro />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Intro } from "./components/Intro";
import Projects from "./components/Projects";

export const App = () => {
  return (
    <div className="mb-10">
      <Header />
      <Intro />
      <Projects />
      <Footer />
    </div>
  );
};

import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';

/**
 * 首页
 * 包含 Hero、About、Projects 三个区块
 */
const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
};

export default Home;

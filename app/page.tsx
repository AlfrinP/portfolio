import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from './(sections)/Home';
import Projects from './(sections)/Projects';
import Experience from './(sections)/Experience';
import TechStack from './(sections)/TechStack';

export default function Page() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <TechStack />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

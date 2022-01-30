import Nav from './Components/Nav'

import './App.css';
import Slogan from './Components/Slogan';
import MyProjects from './Components/MyProjects';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Slogan />
        <MyProjects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

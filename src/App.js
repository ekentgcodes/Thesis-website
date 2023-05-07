import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Convert } from "./components/Convert";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Upload } from "./components/Upload";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Convert />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
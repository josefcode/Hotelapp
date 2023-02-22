
import './App.css';
import { Footer } from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Main from './components/main/Main';




function App() {
  return (
    <div className="app">

      <Navbar />
      <Main />
      <Footer/>
 
    </div>
  );
}

export default App;

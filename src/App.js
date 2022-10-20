import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Layouts/Header';
import Hero from './Components/Elements/Hero';
import Cards from './Components/Elements/Cards';
import Footer from './Components/Layouts/Footer';
import Powering from './Components/Elements/Powering';
import Source from './Components/Elements/Source';
import Founded from './Components/Elements/Founded';
import Blog from './Components/Elements/Blog';

function App() {
  return (
    <div>

      <Header/>
      <Hero/>
      <Cards/>
      <Powering/>
      <Source/>
      <Founded/>
      <Blog/>
      <Footer/>
     
    </div>
  );
}

export default App;

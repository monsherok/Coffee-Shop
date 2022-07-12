import './App.scss';

import Header from './components/Header';
import About from './components/About';
import Best from './components/Best';
import Footer from './components/Footer';

function App() {
  const arr = [
    {imageUrl: './images/1.jpg', descr: 'Solimo Coffee Beans 2 kg', price: 10.73},
    {imageUrl: './images/2.jpg', descr: 'Presto Coffee Beans 1 kg', price: 15.99},
    {imageUrl: './images/3.jpg', descr: 'AROMISTICO Coffee 1 kg', price: 6.99},
  ]
  return (
    <div className="App">
      <Header />
      <About />
      <div className="best">
        <div className="best__inner">
        <h3 className="best__title">Our best</h3>
        <div className="best__cards">
        {arr.map((item, index) => (
          <Best key={index} {...item}/>
        ))}
        </div>
        </div>
      </div>
      
      
      <Footer />
    </div>
  );
}

export default App;

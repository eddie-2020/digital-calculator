import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavHome from './Allpages/navHome';
import NavCalculator from './Allpages/navCalculator';
import NavQuote from './Allpages/navQuote';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<NavHome />} />
        <Route path="/calculator" element={<NavCalculator />} />
        <Route path="/quotes" element={<NavQuote />} />
      </Routes>
    </div>
  );
}

export default App;

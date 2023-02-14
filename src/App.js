import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path='/' element={<Home/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

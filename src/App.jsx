
import Navbar from './components/Navbar';
import './App.css';
import LeftPart from './components/LeftPart';
import RightPart from './components/RightPart';

const App =() => {
  return (
    <div className="app-container">
    <Navbar />
    <div className="main-content">
      <LeftPart />
      <RightPart />
    </div>
  </div>
  )
}

export default App;

import Navbar from './Componenets/Navigation/Navbar'
import PhotoList from './Componenets/PhotoList/PhotoList';

import './App.css';

function App() {
  return (
    <div className="App">
      <PhotoList className='PhotoList'/>
      <Navbar/>
    </div>
  );
}

export default App;

import './App.css';
import Header from './Components/Header/Header';
import Pricing from './Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className="text-4xl">Welcome to MNA Pricing Club</h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;

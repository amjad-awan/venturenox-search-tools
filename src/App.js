import './App.css';
import PropertyType from './Components/propertypes/PropertyType';
import PropertySearch from './Components/PropertySearch';

function App() {
  return (
    <div className="main-wrapper">
      <div>
        <h1>Property Search tool</h1>
      </div>
     <PropertySearch/>
     <PropertyType/>
    </div>
  );
}

export default App;

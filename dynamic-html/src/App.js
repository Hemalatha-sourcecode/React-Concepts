import logo from './logo.svg';
import './App.css';
import DynamicHtml from './Components/DynamicHtml';

function App() {
  return (
    <div className="App">
     <DynamicHtml htmlString="<p>This is a <strong>Dynamic</strong> Html Content</p>" />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import DataFetcher from './Components/DataFetcher';

function App() {
  return (
    <div className="App">
      <DataFetcher apiUrl="https://jsonplaceholder.typicode.com/posts/1" />
    </div>
  );
}

export default App;

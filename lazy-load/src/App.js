import logo from './logo.svg';
import './App.css';
import {lazy, Suspense} from 'react';

const LazyMyComponent = lazy(()=>import('./MyComponent'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Component</div>}>
        <LazyMyComponent />
      </Suspense>
    </div>
  );
}

export default App;

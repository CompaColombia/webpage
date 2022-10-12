import './App.css';
import { useState, useEffect } from 'react';

import Home from './Home'
import LoadingPage from './LoadingPage';

function App() {
  const [allIsFetched, setAllIsFetched] = useState(false)
  
  return (
    <div className="App">
      {!allIsFetched && <LoadingPage />}
      <header className="App-header">
        <Home setAllIsFetched={() => setAllIsFetched(true)}/>
      </header>
    </div>
  );
}

export default App;

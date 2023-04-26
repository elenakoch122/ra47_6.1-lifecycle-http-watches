import { useState } from 'react';
import './App.css';
import WatchForm from './components/WatchForm';
import WatchesList from './components/WatchesList';

function App() {
  const [watchesList, setWatchesList] = useState([]);

  const addWatch = (newWatch) => {
    setWatchesList(prev => [...prev, newWatch]);
  };

  return (
    <div className="App">
      <WatchForm addWatch={addWatch} />
      <WatchesList watchesList={watchesList} />
    </div>
  );
}

export default App;

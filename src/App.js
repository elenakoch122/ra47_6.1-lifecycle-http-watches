import { useState } from 'react';
import './App.css';
import WatchForm from './components/WatchForm';
import WatchesList from './components/WatchesList';

function App() {
  const [watchesList, setWatchesList] = useState([]);

  const addWatch = (newWatch) => {
    setWatchesList(prev => [...prev, newWatch]);
  };

  const deleteWatch = (id) => {
    setWatchesList(prev => prev.filter(w => w.id !== id));
  };

  return (
    <div className="App">
      <WatchForm addWatch={addWatch} />
      <WatchesList watchesList={watchesList} deleteWatch={deleteWatch} />
    </div>
  );
}

export default App;

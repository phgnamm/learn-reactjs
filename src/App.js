import logo from './logo.svg';
import './App.css';
import Video from './components/Video';
import { useEffect } from 'react';
function App() {
  return(
    <div className="flex flex-col items-center">
      <Video/>
      <Video/>
      <Video/>
      <Video/>
    </div>
  );
}

export default App;

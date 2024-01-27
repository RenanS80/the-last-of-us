
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from 'pages/Home';
import Chapters from 'pages/Chapters';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chapters" element={<Chapters />} />
    </Routes>
  );
}

export default App;

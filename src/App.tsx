
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Chapters from 'pages/Chapters';
import Chapter1 from 'pages/Chapters/Chapter1';
import Chapter2 from 'pages/Chapters/Chapter2';

import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chapters" element={<Chapters />} />
      <Route path="/chapters/1" element={<Chapter1 />} />
      <Route path="/chapters/2" element={<Chapter2 />} />
    </Routes>
  );
}

export default App;

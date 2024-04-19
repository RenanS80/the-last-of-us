
import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Chapters from 'pages/Chapters';
import Chapter1 from 'pages/Chapters/Chapter1';
import Chapter2 from 'pages/Chapters/Chapter2';
import Chapter3 from 'pages/Chapters/Chapter3';
import Chapter4 from 'pages/Chapters/Chapter4';

import './App.css';
import Characters from 'pages/Characters';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/chapters" element={<Chapters />} />
      <Route path="/chapters/1" element={<Chapter1 />} />
      <Route path="/chapters/2" element={<Chapter2 />} />
      <Route path="/chapters/3" element={<Chapter3 />} />
      <Route path="/chapters/4" element={<Chapter4 />} />

      <Route path="/characters" element={<Characters />} />
    </Routes>
  );
}

export default App;

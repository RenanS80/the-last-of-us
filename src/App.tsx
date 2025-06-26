
import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Chapters from 'pages/Chapters';
import Chapter1 from 'pages/Chapters/Chapter1';
import Chapter2 from 'pages/Chapters/Chapter2';
import Chapter3 from 'pages/Chapters/Chapter3';
import Chapter4 from 'pages/Chapters/Chapter4';
import Chapter5 from 'pages/Chapters/Chapter5';
import Chapter6 from 'pages/Chapters/Chapter6';
import Chapter7 from 'pages/Chapters/Chapter7';
import Chapter8 from 'pages/Chapters/Chapter8';
import Characters from 'pages/Characters';
import Joel from 'pages/Characters/Joel';
import Ellie from 'pages/Characters/Ellie';
import NotFound from 'pages/NotFound';

import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/chapters" element={<Chapters />} />
      <Route path="/chapters/1" element={<Chapter1 />} />
      <Route path="/chapters/2" element={<Chapter2 />} />
      <Route path="/chapters/3" element={<Chapter3 />} />
      <Route path="/chapters/4" element={<Chapter4 />} />
      <Route path="/chapters/5" element={<Chapter5 />} />
      <Route path="/chapters/6" element={<Chapter6 />} />
      <Route path="/chapters/7" element={<Chapter7 />} />
      <Route path="/chapters/8" element={<Chapter8 />} />

      <Route path="/characters" element={<Characters />} />
      <Route path="/characters/joel" element={<Joel />} />
      <Route path="/characters/ellie" element={<Ellie />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

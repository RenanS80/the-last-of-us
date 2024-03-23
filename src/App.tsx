
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from 'pages/Home';
import Chapters from 'pages/Chapters';
import Chapter1 from 'pages/Chapters/Chapter1';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chapters" element={<Chapters />} />
      <Route path="/chapters/1" element={<Chapter1 />} />
    </Routes>
  );
}

export default App;

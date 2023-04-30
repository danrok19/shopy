
import { Routes, Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import ButtonsPage from './pages/ButtonsPage';
import DropdownPage from './pages/DropdownPage';
import Nav from './components/Nav.js'


function App() {

  return (
    <>
    <Nav />
       <Routes>
          <Route path="/" element={<ButtonsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/buttons" element={<ButtonsPage />} />
          <Route path="/dropdown" element={<DropdownPage />} />
       </Routes>
    </>
  );
}

export default App;

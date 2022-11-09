import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Students from './pages/Students';
import Contact from './pages/ContactUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Students" element={<Students />} />
          <Route path="ContactUs" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
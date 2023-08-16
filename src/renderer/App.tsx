import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Master from 'pages(ui)/master';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Master/>} />
      </Routes>
    </Router>
  );
}

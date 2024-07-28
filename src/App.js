import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Recipes } from './Pages/Recipes';
import { Search } from './Pages/Search';
import { Login } from './Pages/Login';
import { Footer } from './Components/Footer';
import { Navigation } from './Components/Navigation'
import { Contacts } from './Pages/Contacts'
import { SignIn } from './Pages/SignIn';

function App() {
  return (
    <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path='/SignIn' element={<SignIn/>} />
      <Route path="/search" element={<Search />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path='/recipes/:id' element={<Recipes />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
    <Footer />

  </Router>
  );
}

export default App;
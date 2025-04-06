import logo from './logo.svg';
import './App.css';
import Navigation  from './components/navigation/Navigation';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';
import './index.css';
import SignUp from './components/sign-up/SignUP';
import CompleteSignUp from './components/complete-sign-up/CompleteSignUp';
import Home from './components/home/Home';
import Pricing from './components/pricing/Pricing';
import Summary from './components/summary/Summary';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated import

function App() {
  return (
    <Router>  
      <div className="App">
        <div className="navigation-container">
          <Navigation />
        </div>
        <div className="form-container">
          <Routes>  
            <Route path="/" element={<Home />} /> 
            <Route path="/pricing" element={<Pricing />} /> 
            <Route path="/form" element={<Form />} /> 
            <Route path="/sign-up" element={<SignUp />} /> 
            <Route path="/csign-up" element={<CompleteSignUp />} /> 
            <Route path="/summary" element={<Summary />} /> 
          </Routes>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;


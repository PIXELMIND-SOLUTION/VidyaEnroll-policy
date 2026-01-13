import './App.css'
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import PrivacyAndPolicy from './components/PrivacyAndPolicy';
import TermsandConditions from './components/TermsAndConditions';
import Contact from './components/Cantact';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/privacy-and-policy' element={<PrivacyAndPolicy />} />
        <Route path='/terms-and-conditions' element={<TermsandConditions />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App;

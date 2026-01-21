import './App.css'
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Cantact';
import PrivacyPolicy from './components/PrivacyAndPolicy';
import TermsAndConditions from './components/TermsAndConditions';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/privacy-and-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App;

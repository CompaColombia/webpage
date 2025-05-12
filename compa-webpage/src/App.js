import Navbar from './components/Navbar';
import Form from './pages/Form';
import Footer from './components/Footer';
import './styles/styles.scss';
import Home from './pages/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import FormModalButton from './components/FormModalButton';

function App() {

  const path = useLocation().pathname;

  return (
    <>
      <Navbar path={path} />
      <FormModalButton />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/form' element={<Form />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
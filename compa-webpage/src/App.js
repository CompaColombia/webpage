import Navbar from './components/Navbar';
import Agro from './pages/Agro';
import Tech from './pages/Tech';
import Loading from './pages/Loading';
import Footer from './components/Footer';
import './styles/styles.scss';
import Home from './pages/Home';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {

  const path = useLocation().pathname;
  const loadingPages = ['/edu', '/mercado']

  return (
    <>
      <Navbar path={path} />
      {loadingPages.includes(path) ? <Loading /> :
        <>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/agro' element={<Agro />} />
            <Route path='/tech' element={<Tech />} />
            <Route path='/edu' element={<Agro />} />
            <Route path='/mercado' element={<Agro />} />
          </Routes>
          <Footer />
        </>
      }
    </>
  );
}

export default App;
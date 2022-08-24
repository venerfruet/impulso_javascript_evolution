import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './components/Store';
import Header from './components/Header';
import Home from './pages';
import Produtcs from './pages/products';
import Contact from './pages/contact';
import Cart from './pages/cart';

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/products' element={<Produtcs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

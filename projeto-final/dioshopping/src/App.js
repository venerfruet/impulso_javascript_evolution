import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Routes from './routes';
import Header from './components/Header';

const App = () => {

  const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'))

  if (localCart !== null) {
    store.dispatch({ type: 'CHANGE_CART', localCart })
  }

  return (
    <Provider store={store}>
      <div>
        <Router>
          <Header />
          <Routes />
        </Router>
      </div>
    </Provider>
  )
}

export default App;

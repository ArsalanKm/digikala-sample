import HomePage from '../src/pages/home-page';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import CheckoutPage from './pages/cart-page';
import Header from './components/header';
import DetailPage from './pages/detail-page';
import './assets/scss/app.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/product/:productId" component={DetailPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

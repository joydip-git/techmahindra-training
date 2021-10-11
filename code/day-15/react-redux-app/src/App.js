import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ProductList from './products/product-list/ProductList';
import ProductDetail from './products/product-detail/ProductDetail';

function App() {
  return (
    <Router>
      <div>
        <Link to='/products'>
          <button>Products</button>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/'>
          <button>Home</button>
        </Link>
      </div>
      <Switch>
        <Route path='/' render={() => <p>Home</p>} exact />
        <Route path='/products' component={ProductList} exact />
        <Route path='/products/:id' component={ProductDetail} exact />
        <Route path='**' render={() => <p>Page not found</p>} exact />
      </Switch>
    </Router>
  );
}

export default App;

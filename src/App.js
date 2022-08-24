import logo from './logo.svg';
import './App.css';
import Collections from './components/product';

function App() {
  return (
    <div className="App">
     <header className="header">
        <div className="container">
          <div className='header-wrapper'>
            <p className='logo'>Get the app</p>
            <nav>
              <a className='nav1' href="#">Investor Relation</a>
              <a className='nav1' href="#">Add Restaurant</a>
              <a className='nav1' href="#">Sign up</a>
              <a className='nav1' href="#">Login in</a>
            </nav>
          </div>
        </div>
     </header>
     <Collections></Collections>
     <Collections></Collections>
    </div>
  );
}

export default App;

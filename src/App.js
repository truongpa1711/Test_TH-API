import logo from './logo.svg';
import './App.css';
import { Link, Routes,Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddNv from './components/AddNv';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Bài thực hành tổng hợp</h3>
      </header>
      <div className="container">
        <Link to="/home">Home </Link>|{                    }
        <Link to="/form">Add and update</Link>
        <hr />
        <Routes>
          <Route path="/home" Component={HomePage}></Route>
          <Route path='/form' Component={AddNv}></Route>
          <Route path='/form/:id' Component={AddNv}></Route>
        </Routes>        
      </div>
    </div>
  );
}

export default App;

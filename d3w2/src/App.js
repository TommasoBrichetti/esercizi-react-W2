import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomNav from './components/CustomNav';
import Home from './components/HomePage.jsx';
import MyFooter from './components/MyFooter';
import MovieDetails from './MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <CustomNav />
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/details/:movieId' element={ <MovieDetails /> }/>
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;

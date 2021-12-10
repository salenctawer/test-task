import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainContainer from './component/Main/MainContainer.jsx';
import LoginContainer from './component/Login/LoginContainer.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainContainer />}/>
      <Route path='/login' element={<LoginContainer />}/>
    </Routes>
  );
}

export default App;

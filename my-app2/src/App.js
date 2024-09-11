
import LoginForm from './Components/LoginForm/LoginForm'
import RegisterForm from './Components/LoginForm/RegisterForm';
import {BrowserRouter,Routes, Route} from 'react-router-dom';



function App() {
  return (
    
    /*
    <div>
      <LoginForm />
    </div>
    */
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="register" element={<RegisterForm/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

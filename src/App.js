import logo from './logo.svg';
import './App.css';

import Login from './componets/Login/Login';
import Register from './componets/register/Register';
function App() {

  return (
    <div className="App">
       <h3>LOGIN </h3>
          <Login/>
       <h3>REGISTER</h3>
       <Register/>
    </div>
  );
}

export default App;

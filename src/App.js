import logo from './logo.svg';
import './App.css';
import Input from './componets/inputbox/Input';
import Submit from './componets/button/Submit';
import shwetaom  from './image/misslovely.jpeg'
function App() {

  return (
    <div className="App">
       <h3>LOGIN </h3>
       {/* props */}
      <Input type="text"  holder="username"/>
      <br/> 
      <Input type="password" holder="enter your password " />
      <br/>
      <Submit/>
      <br/> 
      <img src={shwetaom}/>
    </div>
  );
}

export default App;

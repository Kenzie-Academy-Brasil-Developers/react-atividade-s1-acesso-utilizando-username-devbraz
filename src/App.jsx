import './App.css';
import {useState} from 'react';
import WelcomePage from './components/WelcomePage'
import GetUserComponent from './components/GetUserComponent'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')
  const Login = () => setIsLoggedIn(true)
  const Logout = () => setIsLoggedIn(false)

  return (

    <div className="App">
      <div className="App-header">
        {
        isLoggedIn?
        <WelcomePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} setUser={setUser} Login={Login} Logout={Logout}/>
        :
        <GetUserComponent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} setUser={setUser} Login={Login} Logout={Logout}/>
        }
      </div>
    </div>

  );

}

export default App;
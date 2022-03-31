const WelcomePage = ({user, setIsLoggedIn}) => {

     const handleLogout = () => setIsLoggedIn(false)

     return (

          <div>
               <div>Seja bem vindo {user}!</div>
               <button onClick={handleLogout}>Logout</button>
          </div>

     )
     
}

export default WelcomePage
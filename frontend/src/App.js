import { useState } from "react";
import Login from "./login";
import Signup from "./Signup";
import Feedback from "./Feedback";

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  const [isLoginPage,setIsLoginPage] = useState(true);

  if(isLoggedIn){
    return <Feedback setIsLoggedIn={setIsLoggedIn}/>;
  }

  return isLoginPage ? (
    <Login 
      setIsLoggedIn={setIsLoggedIn}
      setIsLoginPage={setIsLoginPage}
    />
  ) : (
    <Signup setIsLoginPage={setIsLoginPage}/>
  );
}

export default App;

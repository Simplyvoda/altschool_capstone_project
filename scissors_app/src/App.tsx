// import { useState } from 'react'
import HomePage from "./components/HomePage"
import LogIn from "./components/auth/LogIn"
import SignUp from "./components/auth/SignUp"
import { Routes, Route } from "react-router-dom"

import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase.js';
import { useState, useEffect } from "react";
import { CurrentUser } from "./interfaces/authInterface.js";


function App() {
  const [authUser, setAuthUser] = useState<CurrentUser|null>(null);
  useEffect(() => {
      const listen = onAuthStateChanged(auth, (user: any) => {
          if (user) {
              setAuthUser(user)
          } else {
              setAuthUser(null)
          }
      })
     return () => listen()
  }, [authUser])
  
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage user={authUser}/>} />
        <Route path='/userlogin' element={<LogIn />} />
        <Route path='/usersignup' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App


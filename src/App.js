import React from "react";
import Navbars from './Navbar'
import Create from './Create'
import Deposit from './Deposit'
import Withdraw from './Withdraw'
import Alldata from './Alldata'
import Home from './Home'
import Login from "./Login"
import userContext from './context'
import { HashRouter, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <HashRouter>
        <userContext.Provider
          value={{
            users: [
              {
                name: "Aganthiya",
                email: "aganthiya@gmail.com",
                password: "12345",
                balance: 1000
              }
            ]
          }}
        >
          <Navbars></Navbars>

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Create' element={<Create />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/Deposit' element={<Deposit />}></Route>
            <Route path='/Withdraw' element={<Withdraw />}></Route>
            <Route path='/Alldata' element={<Alldata />}></Route>

          </Routes>
        </userContext.Provider>
      </HashRouter>
    </div>
  )
}
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Pages
import Home from './pages/Home'

import Navbar from './components/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    <div className="App relative">
     	<BrowserRouter>
     		<Navbar className="" />
        	<div className="max-w-[1400px] p-[20px] mx-auto">
          		<Routes> 
          			<Route 
          				path="/"
          				element={<Home />}
          			/>
              
          		</Routes> 
          	</div>
      	</BrowserRouter>
    </div>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New'

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<Home />} />
            <Route path='users'>
               <Route index element={<List />} />
               <Route path=':userId' element={<Single />} />
               <Route path='new' element={<New />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}

export default App
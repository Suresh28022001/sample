import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Get, { Post } from './CRUD'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './Card'
import New from './New'
import Check from './check'
import CrudNew from './CrudNew'
export default function RouterPage() {
  return (
    <div>
        <BrowserRouter>
      
        <Check />

        <Routes>
          
            <Route path='/' element={<Get />} />
            <Route path='/post' element={<Post />} />
            <Route path='/calculation' element={<New />} />
        </Routes>
        <Card />
        </BrowserRouter>
    </div>
  )
}

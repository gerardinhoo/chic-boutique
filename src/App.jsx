import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './routes/components/home/home.component';
import Navigation from './routes/components/navigation/navigation.component';


const Shop = () => {
  return (
    <div>Shopping Page component</div>
  )
}

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

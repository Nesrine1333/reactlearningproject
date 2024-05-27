
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'

function App() {


  return (
    <>
      <Container className='mb-4'>Hello
        <Routes>
          <Route path='' element={<Home/>}></Route>
          <Route path='' element={<Store/>}></Route>
          <Route path='' element={<About/>}></Route>
        </Routes>
      </Container>
    </>
  )
}

export default App

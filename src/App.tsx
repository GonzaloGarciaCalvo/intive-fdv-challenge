import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import {  StoreProvider } from './components/Context'
import Revisited from './Revisited'
import Home from './Home'

function App() {

  

  return (
    <BrowserRouter>
      <StoreProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/esp' element={<Home />} />
          <Route path='/api/revisited' element={<Revisited />} />
        </Routes>
      </StoreProvider>
    </BrowserRouter>
  )
}

export default App

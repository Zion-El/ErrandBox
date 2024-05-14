import { Route, Routes } from 'react-router-dom'
import CustomerForm from './Views/customerForm'
import Home from './Views/home'
import AgentForm from './Views/agentForm'


function App() {

  return (
    <>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/customer-order'} element={<CustomerForm/>}/>
      <Route path={'/agent'} element={<AgentForm/>}/>
    </Routes>
      
    </>
  )
}

export default App

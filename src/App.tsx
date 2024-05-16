import { Route, Routes } from 'react-router-dom'
import CustomerForm from './Views/customerForm'
import Home from './Views/home'
import AgentForm from './Views/agentForm'
import { Suspense } from 'react';
import Loader from './components/shared/Loader';


function App() {

  return (
    <>
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/customer-order'} element={<CustomerForm/>}/>
        <Route path={'/agent'} element={<AgentForm/>}/>
      </Routes>      
    </Suspense>

      
    </>
  )
}

export default App

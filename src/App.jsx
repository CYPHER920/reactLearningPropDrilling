
import { BrowserRouter, Routes,Route, useNavigate } from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'
import { Topbar } from './components/Topbar'
function App() {
  return (
     
    <>
         <BrowserRouter>
            <Appbar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/landing" element={<Landing/>}/>
          </Routes>
         </BrowserRouter>
    </>
  )
}

 function Appbar()
{
  const navigate=useNavigate();

   return <div>
    <button onClick={()=>{
           navigate('/landing')
          }}>Landing Page</button>
          <button onClick={()=>{
            navigate('/dashboard')
          }}>DashBoard</button>
        <br/>
          <Topbar></Topbar>
   </div>
}

export default App

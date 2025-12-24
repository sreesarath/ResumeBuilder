import { Route, Routes } from 'react-router-dom'
import PageNotFound from './Pages/PageNotFound'
import './App.css'
import Landingpage from './Pages/Landingpage'
import UserForm from './Pages/UserForm'
import ResumeGenerator from './Pages/ResumeGenerator'
import History from './Pages/History'
import Footer from './Component/Footer'
import Header from './Component/Header'



function App() {
  

  return (
    <>
    <Header/>
      <Routes>
       
       <Route path='/' element={<Landingpage/>}/>
       <Route path='/resume' element={<ResumeGenerator/>}/>
       <Route path='/form' element={<UserForm/>}/>
       <Route path='/history' element={<History/>}/>
       <Route path='/*' element={<PageNotFound/>}/>

      </Routes>
      <Footer/>
    
    </>
  )
}

export default App

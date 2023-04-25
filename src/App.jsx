import {BrowserRouter} from 'react-router-dom'
import {About,Navbar, Hero,Contact, Tech} from './components';
  const App=()=>{

  return (
    <div> 
      3d egioc
      <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"></div>
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Tech/>
      <div className='relative z=0'>
        <Contact/>
        <Hero/>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App

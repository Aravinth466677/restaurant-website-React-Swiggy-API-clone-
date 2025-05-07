import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import About from './components/About/About';
import Error from './components/error/Error';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ResMenu from './components/resMenu/ResMenu';
import { useEffect,useState } from 'react';
import { userContext } from './components/utils/userContext';
import Media from './components/media/Media';
import ReduxPractice from './components/redux/ReduxPractice';
import { ThemeProvider } from './components/Header/ThemeContext';
import SideBar from './components/SideBar/SideBar';



function App() {

  const [name,setName]=useState("")

  useEffect(()=>{
      const data={
        name:"dinesh"
      }
      setName(data.name)
  },[])



  return (
    
    <ThemeProvider >
      <userContext.Provider value={{ userlogindetail: name,setName }}>

        <Header />
        <SideBar/>
        <div style={{flex:"1"}}><Outlet  /></div>
        <Footer />
      </userContext.Provider>
    </ThemeProvider>
    
    
  );
}
const router=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<Error />,
    children:[
      {
        path:"/",
        element:<Body />
      },
      {
      path:"/about",
      element:<About />
    },
    {
      path:"/contact",
      element:<Contact />
    },
    {
      path:"/menu/:id",
      element:<ResMenu />
    },
    {
      path:"/media",
      element:<Media />
    },
    {
      path:"/redux",
      element:<ReduxPractice />
    }]
  }
  
])


//funcion for router
function layout(){
  return(
  <RouterProvider router={router} />
  )
}

export default layout;

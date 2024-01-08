
import AboutUs from "./website/aboutUS";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './website/homePage';
import ServicePage from './website/servicePage';
import Header from './website/header';
import Footer from "./website/footer";

function App(){
    return (
        <div>        
            <BrowserRouter>
                <Header/>
                    <Routes>
                        <Route path='/' element={<HomePage/>} />
                        <Route path='/about' element={<AboutUs/>} />
                        <Route path='/services' element={<ServicePage/>} />
                        <Route path='/blog' element={<AboutUs/>} />
                        <Route path='/contact' element={<AboutUs/>} />
                    </Routes> 
                <Footer/>  
            </BrowserRouter>        
        </div>
    );
}

export default App;
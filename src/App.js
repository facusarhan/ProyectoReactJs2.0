import React from 'react';
import  { NavBar }  from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { CartProvider } from './context/CartContext';
import { DarkModeProvider } from './context/DarkModeContext';
import Footer from './components/Footer/Footer';

function App() {


  return (

    <DarkModeProvider>
      <CartProvider>

        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
            <Footer/>   
        </BrowserRouter>
        
      </CartProvider>
    </DarkModeProvider>

  );
}

export default App;
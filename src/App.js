import React from 'react'
import Home from './pages/home';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SingIn from './pages/singIn'
import theme from './theme';
import GuestRoute from './routes/guestRoutes'
import './mock'

function App() {
  console.log(window.location.href)
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <GuestRoute path='/login' element= {<SingIn/>}/>
          <Route path='*' element={<h1>Page Not Found (404)</h1>}/>
        </Routes>
      </BrowserRouter> 
    </ThemeProvider>
  );
}

export default App;

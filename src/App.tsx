import React, {Suspense} from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import { AppStyled } from "./app.styled";
import { GlobalStyle } from './global-style';
import Routes from "./Routes";
import { Header, Footer, Loader} from "./components";


function App() {
  return (
    <Router>
      <AppStyled>
        <GlobalStyle/>
        <Suspense fallback={<Loader/>}>
          <Header/>
          <Routes/>
          <Footer/>
        </Suspense>
      </AppStyled>
    </Router>
  );
}

export default App;

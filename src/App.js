import React from 'react';

import './App.css';
import NavBar from './components/navbar/NavBar';
import { MuiThemeProvider } from 'material-ui/styles';
import Search from './components/search/Search';
function App() {
  return (
    <div className='App'>
      <MuiThemeProvider>
        <div className=''>
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;

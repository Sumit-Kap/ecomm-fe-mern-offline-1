import './App.css';

import { Route, Routes } from 'react-router';

import Header from './components/common/header';
import { appConstants } from './constants/appConstants';

function App() {
  return (
    <div className='w-[100vw] h-[100vh]'>
      <Header/>
      <Routes>
        {appConstants.routes.map((route) => (
          <Route element={route.component} path={route.path} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
// appConstant  - A -> Header
// App.js - B -> A

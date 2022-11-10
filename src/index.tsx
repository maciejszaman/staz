import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Piesek } from './routes/Piesek';
import { Kotek } from './routes/Kotek';
import { Zadaniedrugie } from './routes/Zadaniedrugie/Zadaniedrugie';
import { Form } from './routes/Form/Form'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/kotek' element={<Piesek/>} />
        <Route path='/piesek' element={<Kotek/>} />
        <Route path='/2' element={<Zadaniedrugie/>} />
        <Route path='/3' element={<Form/>}/>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

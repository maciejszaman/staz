import React from 'react';
import './App.css';

function App() {
  return (
    <div className='bg-amber-200 h-[100vh]'>
      <div className='wrapper flex flex-col gap-3 justify-center pt-[5%] pb-[5%] pl-[10%] pr-[10%]'>
        <div className="card w-60 h-24 rounded-lg p-3 text-center bg-amber-100 shadow">
          <p className='pt-6'>Maciej Bubel</p>
        </div>
        <a href='/2'>
          <div className='card w-60 h-24 rounded-lg p-3 hover:bg-amber-100 hover:shadow-lg text-center bg-amber-100 shadow'>
            <p className='mt-6'>Paginacja, Search</p>
          </div>
        </a>
        <a href='/3'>
          <div className='card w-60 h-24 rounded-lg p-3 hover:bg-amber-100 hover:shadow-lg text-center bg-amber-100 shadow'>
            <p className='mt-6'>Formularz</p>
          </div>
        </a>
        
      </div>
    </div>
  );
}

export default App;

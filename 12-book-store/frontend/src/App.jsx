import { useState } from 'react'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <main className='m'>
      <nav>Navbar</nav>
      <Outlet/>
      <footer>Footer</footer>
      </main>
    </>
  );
}

export default App










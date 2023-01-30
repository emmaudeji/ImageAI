import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost, Header } from './pages';

const App = () => {
  return (
    <BrowserRouter>
    <Header logo={logo}/>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
  )
}

export default App
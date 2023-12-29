import React from 'react'
import Navbar from './components/Navbar'
import HeaderBanner from './components/HeaderBanner'
import Content from './components/Content'

const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
        
        <div id="banner">
          <HeaderBanner/>
        </div>

        <div id="content">
          <Content/>
        </div>

      </main>
    </div>

    
  )
}

export default App

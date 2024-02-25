// File: src/components/App/App.jsx
// Date: 9/14/2019
// Note: Mobile First RWD-SPA
//..............................................................................
console.info('Mounting src/components/App/App.jsx... <App />')

import React from 'react'
// import Header from "../../components/Site/Header/Header";
// import Navigation from "../../components/Site/Nav/Navigation";
// import Main from "../../components/Site/Main";
// import Aside from '../../components/Site/Aside/Aside'
import Footer from '../../components/Site/Footer/Footer'

import './App.sass'

const Flexbox = () => {
  return (
    <div className='parent'>
      <div className='child'>
        CSS Flexbox Module
        <div />
        It' works!
      </div>
    </div>
  )
}

const App = () => {
  // function App() {
  // class App extends Component {
  // render() {
  return (
    <div className='App'>
      {/* <Header /> */}
      {/* <Navigation /> */}
      {/* <Main /> */}
      {/* <Aside /> */}
      <Footer />
      <Flexbox />
    </div>
  )
  // }
  // }
}

export default App

// eof

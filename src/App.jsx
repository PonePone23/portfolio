import React from 'react'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import AboutMe from './components/aboutMe/AboutMe'
import Experience from "./components/experience/Experience"
import Projects from './components/projects/Projects'
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <AboutMe></AboutMe>
    <Experience></Experience>
    <Projects></Projects>
    </>
   
  )
}

export default App

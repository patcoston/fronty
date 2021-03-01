import React from "react"
import MainBody from "./components/MainBody"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-body">
        <Header />
        <MainBody />
        <Footer />
      </div>
    </div>
  )
}

export default App

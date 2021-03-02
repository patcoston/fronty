import React from "react"
import Routes from "./components/Routes"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-body">
        <Header />
        <Routes />
        <Footer />
      </div>
    </div>
  )
}

export default App

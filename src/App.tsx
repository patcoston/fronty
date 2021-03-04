import React from "react"
import Routes from "./components/Routes/Routes"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
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

import React from "react"
import Routes from "./components/Routes/Routes"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import "./App.scss"

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-body">
        <Header />
        <div className="border">
          <Routes />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App

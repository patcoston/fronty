import React from "react"
import AddFilter from "./components/AddFilter"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-main">
        <AddFilter />
      </main>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  )
}

export default App

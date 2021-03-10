import React, { useEffect, useState } from "react"
import { useStore } from "./store/StoreProvider"
import Routes from "./components/Routes/Routes"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import axios from "axios"
import * as constant from "./utils/constants"
import { TFilterObject, TFilterDataArray } from "./utils/types"
import "./App.scss"

const App = () => {
  const { filterData, setFilterData } = useStore()
  const jsonData: TFilterDataArray = []

  useEffect(() => {
    const readData = async (source: string) => {
      try {
        const response = await axios
          .get(`${constant.URL_DATA}${source}.json`)
          .then(response => {
            const data: TFilterObject = response.data
            console.log(data)
            const index: number = data.index
            console.log(index)
            jsonData[index] = data
            console.log(jsonData)
          })
        return response
      } catch (error) {
        console.log(error)
      }
    }

    const p1 = readData("techstack")
    const p2 = readData("workingfromhome")
    const p3 = readData("payment")
    const p4 = readData("benefits")
    const p5 = readData("commute")
    const p6 = readData("company")
    const p7 = readData("companysize")
    const p8 = readData("educationrequired")
    const p9 = readData("employeetype")
    const p10 = readData("experiencelevel")
    const p11 = readData("industry")
    const p12 = readData("internalexternal")
    const p13 = readData("methodology")
    const p14 = readData("mobile")
    const p15 = readData("accessibility")
    const p16 = readData("petsallowed")
    const p17 = readData("dresscode")

    Promise.all([
      p1,
      p2,
      p3,
      p4,
      p5,
      p6,
      p7,
      p8,
      p9,
      p10,
      p11,
      p12,
      p13,
      p14,
      p15,
      p16,
      p17,
    ]).then(() => {
      setFilterData([...jsonData])
    })
  }, [])

  console.log("count and filterData outside UseEffect()")
  console.log(filterData)

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

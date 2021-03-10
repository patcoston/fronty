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

    const dataName = [
      "accessibility",
      "benefits",
      "commute",
      "company",
      "companysize",
      "dresscode",
      "educationrequired",
      "employeetype",
      "experiencelevel",
      "experiencelevel",
      "industry",
      "internalexternal",
      "methodology",
      "mobile",
      "payment",
      "petsallowed",
      "techstack",
      "workingfromhome",
    ]

    const promises = dataName.map(label => readData(label))

    Promise.all(promises).then(() => {
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

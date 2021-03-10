import React, { useEffect, useState } from "react"
import { useStore } from "./store/StoreProvider"
import Routes from "./components/Routes/Routes"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import axios from "axios"
import * as constant from "./utils/constants"
import { TFilterDataArray } from "./utils/types"
import "./App.scss"

const App = () => {
  const { filterData, setFilterData } = useStore()
  const jsonData: TFilterDataArray = []

  useEffect(() => {
    const readData = async (data: string, index: number) => {
      try {
        const response = await axios.get(`${constant.URL_DATA}${data}.json`)
        jsonData[index] = await response.data
        console.log(jsonData)
        return response
      } catch (error) {
        console.log(error)
      }
    }

    const p1 = readData("techstack", constant.SHOW_FILTER_TECH_STACK)
    const p2 = readData(
      "workingfromhome",
      constant.SHOW_FILTER_WORKING_FROM_HOME,
    )
    const p3 = readData("payment", constant.SHOW_FILTER_PAYMENT)
    const p4 = readData("benefits", constant.SHOW_FILTER_BENEFITS)
    const p5 = readData("commute", constant.SHOW_FILTER_COMMUTE)
    const p6 = readData("company", constant.SHOW_FILTER_COMPANY)
    const p7 = readData("companysize", constant.SHOW_FILTER_COMPANY_SIZE)
    const p8 = readData(
      "educationrequired",
      constant.SHOW_FILTER_EDUCATION_REQUIRED,
    )
    const p9 = readData("employeetype", constant.SHOW_FILTER_EMPLOYEE_TYPE)
    const p10 = readData(
      "experiencelevel",
      constant.SHOW_FILTER_EXPERIENCE_LEVEL,
    )
    const p11 = readData("industry", constant.SHOW_FILTER_INDUSTRY)
    const p12 = readData(
      "internalexternal",
      constant.SHOW_FILTER_INTERNAL_EXTERNAL,
    )
    const p13 = readData("methodology", constant.SHOW_FILTER_METHODOLOGY)
    const p14 = readData("mobile", constant.SHOW_FILTER_MOBILE)
    const p15 = readData("accessibility", constant.SHOW_FILTER_ACCESSIBLE)
    const p16 = readData("petsallowed", constant.SHOW_FILTER_PETS_ALLOWED)
    const p17 = readData("dresscode", constant.SHOW_FILTER_DRESS_CODE)

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

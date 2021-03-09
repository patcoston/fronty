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
  const [count, setCount] = useState<number>(0)
  const jsonData: TFilterDataArray = []

  useEffect(() => {
    const readData = async (data: string, index: number) => {
      if (count > 17) {
        console.log("IF count > 17 return")
        return
      }
      try {
        const response = await axios.get(`${constant.URL_DATA}${data}.json`)
        jsonData[index] = await response.data
        console.log(jsonData)
        setCount(count + 1)
        console.log(count)
        if (count === 17) {
          console.log("count === 17 SET FILTER DATA show count and jsonData")
          console.log(count)
          console.log(jsonData)
          setFilterData([...jsonData])
          setCount(100) // done reading data
        }
      } catch (error) {
        console.log(error)
      }
    }

    readData("techstack", constant.SHOW_FILTER_TECH_STACK)
    readData("workingfromhome", constant.SHOW_FILTER_WORKING_FROM_HOME)
    readData("payment", constant.SHOW_FILTER_PAYMENT)
    readData("benefits", constant.SHOW_FILTER_BENEFITS)
    readData("commute", constant.SHOW_FILTER_COMMUTE)
    readData("company", constant.SHOW_FILTER_COMPANY)
    readData("companysize", constant.SHOW_FILTER_COMPANY_SIZE)
    readData("educationrequired", constant.SHOW_FILTER_EDUCATION_REQUIRED)
    readData("employeetype", constant.SHOW_FILTER_EMPLOYEE_TYPE)
    readData("experiencelevel", constant.SHOW_FILTER_EXPERIENCE_LEVEL)
    readData("industry", constant.SHOW_FILTER_INDUSTRY)
    readData("internalexternal", constant.SHOW_FILTER_INTERNAL_EXTERNAL)
    readData("methodology", constant.SHOW_FILTER_METHODOLOGY)
    readData("mobile", constant.SHOW_FILTER_MOBILE)
    readData("accessibility", constant.SHOW_FILTER_ACCESSIBLE)
    readData("petsallowed", constant.SHOW_FILTER_PETS_ALLOWED)
    readData("dresscode", constant.SHOW_FILTER_DRESS_CODE)
  }, [])

  console.log("count and filterData outside UseEffect()")
  console.log(count)
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

import { FC } from "react"
import { useStore } from "../store/StoreProvider"
import filterData from "../data/filter-data"
import { SHOW_FILTER_COMPANY } from "../utils/constants"
import "./ShowResults.css"

const ShowResults: FC = () => {
  const { showResults, activeFilters } = useStore()
  const activeFilterArray = Object.entries(activeFilters)
  const filtersToShow: boolean = activeFilterArray.length > 0
  const show: boolean = showResults && filtersToShow
  const companies: Array<string> = []
  const len = filterData[SHOW_FILTER_COMPANY].list.length
  for (let i: number = 0; i < 10; i++) {
    let rnd = Math.floor(Math.random() * Math.floor(len - 1)) + 1
    companies.push(filterData[SHOW_FILTER_COMPANY].list[rnd])
  }

  return (
    <>
      {show && (
        <div className="show-results">
          {companies.map(company => `${company} `)}
        </div>
      )}
    </>
  )
}

export default ShowResults

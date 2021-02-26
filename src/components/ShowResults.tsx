import { FC } from "react"
import { useStore } from "../store/StoreProvider"
import "./ShowResults.css"

const ShowResults: FC = () => {
  const { showResults, activeFilters } = useStore()
  const activeFilterArray = Object.entries(activeFilters)
  const filtersToShow: boolean = activeFilterArray.length > 0
  const show: boolean = showResults && filtersToShow
  return <>{show && <div className="show-results">Show Results</div>}</>
}

export default ShowResults

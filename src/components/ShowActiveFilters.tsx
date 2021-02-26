import { FC } from "react"
import { useStore } from "../store/StoreProvider"
import { SHOW_FILTER_FIRST, SHOW_FILTER_LAST } from "../utils/constants"
import "./ShowActiveFilters.css"

const ShowFilters: FC = () => {
  const { showActiveFilters, activeFilters } = useStore()
  return (
    <>
      {showActiveFilters && (
        <div className="show-active-filters">Active Filters</div>
      )}
    </>
  )
}

export default ShowFilters

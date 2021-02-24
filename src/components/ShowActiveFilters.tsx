import { FC } from "react"
import { useStore } from "../store/StoreProvider"
import "./ShowActiveFilters.css"

const ShowFilters: FC = () => {
  const { showActiveFilters } = useStore()
  return (
    <>
      {showActiveFilters && (
        <div className="show-active-filters">Show Active Filters</div>
      )}
    </>
  )
}

export default ShowFilters

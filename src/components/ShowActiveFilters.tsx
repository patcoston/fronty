import { FC } from "react"
import { useStore } from "../store/StoreProvider"
import "./ShowActiveFilters.css"

const ShowFilters: FC = () => {
  const { showActiveFilters, activeFilters } = useStore()
  return (
    <>
      {showActiveFilters && (
        <div className="show-active-filters">
          {Object.entries(activeFilters).map(filter => {
            return <div key={filter[0]}>{filter[0]}</div>
          })}
        </div>
      )}
    </>
  )
}

export default ShowFilters

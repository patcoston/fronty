import { FC } from "react"
import { useStore } from "../store/StoreProvider"
import "./ShowActiveFilters.css"

const ShowFilters: FC = () => {
  const { showActiveFilters, activeFilters } = useStore()
  return (
    <>
      {showActiveFilters && (
        <div className="show-active-filters">
          <h3>Filters:</h3>
          {Object.entries(activeFilters).map(filter => {
            return (
              <div key={filter[0]}>
                <strong>{filter[0]}:</strong> {filter[1].join()}
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default ShowFilters

import { FC } from "react"
import { useStore } from "../store/StoreProvider"
import "./ShowActiveFilters.css"

const ShowFilters: FC = () => {
  const { activeFilters } = useStore()
  const activeFilterArray = Object.entries(activeFilters)
  const filtersToShow: boolean = activeFilterArray.length > 0
  const show: boolean = activeFilters && filtersToShow
  return (
    <>
      {show && (
        <section className="show-active-filters-wrapper">
          <h3>Filters</h3>
          <div className="show-active-filters">
            {activeFilterArray.map(filter => {
              return (
                <section key={filter[0]}>
                  <strong>{filter[0]}:</strong>{" "}
                  {filter[1].join().replace(/,/g, ", ")}
                </section>
              )
            })}
          </div>
        </section>
      )}
    </>
  )
}

export default ShowFilters

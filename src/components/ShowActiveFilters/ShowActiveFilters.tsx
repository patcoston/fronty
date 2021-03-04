import { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import { IFilters } from "../../utils/interfaces"
import CloseIcon from "../../svg/closeicon"
import "./ShowActiveFilters.css"

const ShowFilters: FC = () => {
  const { activeFilters, setActiveFilters } = useStore()
  const activeFilterArray = Object.entries(activeFilters)
  const filtersToShow: boolean = activeFilterArray.length > 0
  const show: boolean = activeFilters && filtersToShow

  const handleDelete = (filter: string) => {
    const newActiveFilters: IFilters = { ...activeFilters }
    delete newActiveFilters[filter]
    setActiveFilters(newActiveFilters)
  }

  return (
    <>
      {show && (
        <section className="show-active-filters-wrapper">
          <h3>Filters</h3>
          <div className="show-active-filters">
            {activeFilterArray.map((filter, index) => {
              return (
                <section key={index}>
                  <span
                    className="show-active-close"
                    onClick={() => handleDelete(filter[0])}
                  >
                    <CloseIcon />
                  </span>
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

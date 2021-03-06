import { FC } from "react"
import ShowResults from "../ShowResults/ShowResults"
import { useStore } from "../../store/StoreProvider"
import { IFilters } from "../../utils/interfaces"
import { TObjectEntries } from "../../utils/types"
import CloseIcon from "../../svg/closeicon"
import clsx from "clsx"
import "./ShowActiveFilters.scss"

/**
 * Show Active Filters
 * Used By: Home
 * Purpose: Displays the filters which are currently active
 */

interface Props {
  activeFilterArray: TObjectEntries
}

const ShowActiveFilters: FC<Props> = ({ activeFilterArray }) => {
  const { activeFilters, setActiveFilters } = useStore()

  const handleDelete = (filter: string) => {
    const newActiveFilters: IFilters = { ...activeFilters }
    delete newActiveFilters[filter]
    setActiveFilters(newActiveFilters)
  }

  return (
    <div className="show-active-filters">
      <h3>Filters</h3>
      <div className={clsx("show-active-filters-body", "border")}>
        {activeFilterArray.map((filter, index) => {
          return (
            <section key={index}>
              <span
                className="show-active-filters-close"
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
      <ShowResults />
    </div>
  )
}

export default ShowActiveFilters

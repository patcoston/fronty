import { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import { IFilters } from "../../utils/interfaces"
import { TObjectEntries } from "../../utils/types"
import CloseIcon from "../../svg/closeicon"
import Button from "@material-ui/core/Button"
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

  const toggleFilter = (label: string, indexFilter: number) => {
    const newActiveFilters: IFilters = { ...activeFilters }
    let newVal = activeFilters[label][indexFilter]
    if (newVal.substring(0, 4) === "NOT:") {
      newVal = activeFilters[label][indexFilter].substring(4) // Remove NOT:
    } else {
      newVal = `NOT:${activeFilters[label][indexFilter]}` // Prefix NOT:
    }
    newActiveFilters[label][indexFilter] = newVal
    setActiveFilters(newActiveFilters)
  }

  return (
    <div className="show-active-filters">
      <strong>Current Filters: </strong> Click to toggle NOT filter
      <div className={clsx("show-active-filters-body", "border")}>
        {activeFilterArray.map((filter, indexArray) => {
          return (
            <section key={indexArray}>
              <span
                className="show-active-filters-close"
                onClick={() => handleDelete(filter[0])}
              >
                <CloseIcon />
              </span>
              <strong>{filter[0]}:</strong>{" "}
              {filter[1].map((val, indexFilter) => {
                return (
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    key={indexFilter}
                    onClick={() => toggleFilter(filter[0], indexFilter)}
                  >
                    {val}
                  </Button>
                )
              })}
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default ShowActiveFilters

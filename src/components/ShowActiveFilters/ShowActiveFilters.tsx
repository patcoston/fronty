import { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import { IFilters } from "../../utils/interfaces"
import { TObjectEntries } from "../../utils/types"
import CloseIcon from "../../svg/closeicon"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"

/**
 * Show Active Filters
 * Used By: Home
 * Purpose: Displays the filters which are currently active
 */

const useStyles = makeStyles({
  showActiveFilters: {
    padding: 0,
    margin: 0,
  },
  showActiveFiltersBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  showActiveFiltersClose: {
    padding: 0,
    margin: "0 5px 0 0",
    cursor: "pointer",
  },
  border: {
    /* this is a global style defined in App.scss
    put here temporarily */ border: "1px solid #ccc",
  },
  h3: {
    marginLeft: 5,
  },
  section: {
    padding: 0,
    margin: 0,
  },
  button: {
    margin: "5px 0 0 3px",
  },
})

interface Props {
  activeFilterArray: TObjectEntries
}

const ShowActiveFilters: FC<Props> = ({ activeFilterArray }) => {
  const classes = useStyles()
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
    <div className={classes.showActiveFilters}>
      <strong>Current Filters: </strong> Click to toggle NOT filter
      <div className={clsx(classes.showActiveFiltersBody, classes.border)}>
        {activeFilterArray.map((filter, indexArray) => {
          return (
            <section key={indexArray}>
              <span
                className={classes.showActiveFiltersClose}
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

import { FC, useState } from "react"
import FilterTypeMenu from "../FilterTypeMenu/FilterTypeMenu"
import FilterChooseMenu from "../FilterChooseMenu/FilterChooseMenu"
import ShowActiveFilters from "../ShowActiveFilters/ShowActiveFilters"
import ShowResults from "../ShowResults/ShowResults"
import { useStore } from "../../store/StoreProvider"
import { makeStyles } from "@material-ui/core/styles"
import { TStringArray, TObjectEntries } from "../../utils/types"

/**
 * Home
 * Used By: Routes
 * Purpose: Displays the Home page which includes
 * - Filter types menu
 * - Filters menu
 * - Active filters
 * - Results
 */

const useStyles = makeStyles({
  home: {
    padding: 0,
    margin: 0,
  },
  homeHeader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 0,
    margin: 0,
  },
  homeBody: {
    padding: 0,
    margin: 0,
  },
})

const Home: FC = () => {
  const classes = useStyles()
  const [list, setList] = useState<TStringArray>([])
  const [label, setLabel] = useState<string>("")
  const {
    setShowFilterTypeMenu,
    setShowResults,
    filterData,
    showFilterTypeMenu,
    showResults,
    activeFilters,
  } = useStore()

  const activeFilterArray: TObjectEntries = Object.entries(activeFilters)

  if (activeFilterArray.length) {
    setShowResults(true)
  } else {
    setShowResults(false)
  }

  if (!list.length) {
    setShowFilterTypeMenu(true)
  }

  const showFilter = (showIndex: number) => {
    setShowResults(true)
    setShowFilterTypeMenu(false)
    setList(filterData[showIndex].list)
    setLabel(filterData[showIndex].label)
  }

  return (
    <div className={classes.home}>
      <div className={classes.homeHeader}>
        {showFilterTypeMenu && <FilterTypeMenu showFilter={showFilter} />}
        {!showFilterTypeMenu && <FilterChooseMenu list={list} label={label} />}
      </div>
      <div className={classes.homeBody}>
        {showResults && (
          <>
            <ShowActiveFilters activeFilterArray={activeFilterArray} />
            <ShowResults />
          </>
        )}
      </div>
    </div>
  )
}

export default Home

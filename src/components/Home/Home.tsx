import { FC, useState, useEffect } from "react"
import FilterTypeMenu from "../FilterTypeMenu/FilterTypeMenu"
import FilterChooseMenu from "../FilterChooseMenu/FilterChooseMenu"
import ShowActiveFilters from "../ShowActiveFilters/ShowActiveFilters"
import ShowResults from "../ShowResults/ShowResults"
import { useStore } from "../../store/StoreProvider"
import filterData from "../../data/filter-data"
import * as showType from "../../utils/constants"
import { TObjectEntries } from "../../utils/types"
import "./Home.scss"

/**
 * Home
 * Used By: Routes
 * Purpose: Displays the Home page which includes
 * - Filter types menu
 * - Filters menu
 * - Active filters
 * - Results
 */

const Home: FC = () => {
  const [list, setList] = useState<Array<string>>([])
  const [label, setLabel] = useState<string>("")
  const {
    setShowFilterTypeMenu,
    setShowResults,
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

  if (list.length) {
    setShowFilterTypeMenu(false)
  } else {
    setShowFilterTypeMenu(true)
  }

  const showFilter = (showIndex: number) => {
    setShowFilterTypeMenu(false)
    setShowResults(true)

    switch (showIndex) {
      case showType.SHOW_MENU:
        setShowFilterTypeMenu(true)
        break
      default:
        setList(filterData[showIndex].list)
        setLabel(filterData[showIndex].label)
        break
    }
  }

  return (
    <div className="home">
      <div className="home-header">
        {showFilterTypeMenu && <FilterTypeMenu showFilter={showFilter} />}
        {!showFilterTypeMenu && (
          <FilterChooseMenu showFilter={showFilter} list={list} label={label} />
        )}
      </div>
      <div className="home-body">
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

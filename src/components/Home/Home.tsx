import { FC, useState, useEffect } from "react"
import FilterTypeMenu from "../FilterTypeMenu/FilterTypeMenu"
import FilterChooseMenu from "../FilterChooseMenu/FilterChooseMenu"
import ShowActiveFilters from "../ShowActiveFilters/ShowActiveFilters"
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
    setShowActiveFilters,
    setShowResults,
    setShowFilters,
    showFilterTypeMenu,
    showFilterChooseMenu,
    showResults,
    activeFilters,
  } = useStore()

  const activeFilterArray: TObjectEntries = Object.entries(activeFilters)
  const show: boolean = showResults && activeFilterArray.length > 0

  if (!showFilterTypeMenu && !showFilterChooseMenu) {
    setShowFilterTypeMenu(true)
  }

  const showFilter = (showIndex: number) => {
    setShowFilterTypeMenu(false)
    setShowActiveFilters(true)
    setShowResults(true)
    setShowFilters(false)

    switch (showIndex) {
      case showType.SHOW_MENU:
        setShowFilterTypeMenu(true)
        break
      default:
        setShowFilters(true)
        setList(filterData[showIndex].list)
        setLabel(filterData[showIndex].label)
        break
    }
  }

  // useEffect(() => {
  //   setShowFilters(false)
  // }, [label, setShowFilters])

  return (
    <div className="home">
      <div className="home-header">
        {showFilterTypeMenu && <FilterTypeMenu showFilter={showFilter} />}
        {showFilterChooseMenu && (
          <FilterChooseMenu showFilter={showFilter} list={list} label={label} />
        )}
      </div>
      <div className="home-body">
        {show && <ShowActiveFilters activeFilterArray={activeFilterArray} />}
      </div>
    </div>
  )
}

export default Home

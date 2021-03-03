import { FC, useState } from "react"
import FilterMenu from "./FilterMenu"
import FilterChoose from "./FilterChoose"
import ShowActiveFilters from "./ShowActiveFilters"
import ShowResults from "./ShowResults"
import { useStore } from "../store/StoreProvider"
import filterData from "../data/filter-data"
import * as showType from "../utils/constants"
import "./Home.css"

const Home: FC = () => {
  const [list, setList] = useState<Array<string>>([])
  const [label, setLabel] = useState<string>("")
  const {
    setShowMenu,
    setShowActiveFilters,
    setShowResults,
    setShowFilters,
    showFilters,
    showMenu,
  } = useStore()

  const showFilter = (showIndex: number) => {
    setShowMenu(false)
    setShowActiveFilters(true)
    setShowResults(true)
    setShowFilters(false)

    switch (showIndex) {
      case showType.SHOW_MENU:
        setShowMenu(true)
        break
      default:
        setShowFilters(true)
        setList(filterData[showIndex].list)
        setLabel(filterData[showIndex].label)
        break
    }
  }

  return (
    <>
      <div className="home">
        {!showMenu && (
          <button onClick={() => showFilter(showType.SHOW_MENU)}>
            Choose Filter Type
          </button>
        )}
        <FilterMenu showFilter={showFilter} />
        {showFilters && <FilterChoose list={list} label={label} />}
      </div>
      <ShowActiveFilters />
      <ShowResults />
    </>
  )
}

export default Home

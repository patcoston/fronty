import { FC, useState } from "react"
import FilterMenu from "./FilterMenu"
import FilterChoose from "./FilterChoose"
import ShowActiveFilters from "./ShowActiveFilters"
import ShowResults from "./ShowResults"
import { useStore } from "../store/StoreProvider"
import filterData from "../data/filter-data"
import * as filterType from "../utils/constants"
import "./MainBody.css"

const AddFilter: FC = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false)
  const [list, setList] = useState<Array<string>>([])
  const [label, setLabel] = useState<string>("")
  const { setShowMenu, setShowActiveFilters, setShowResults } = useStore()

  const showFilter = (menuType: number) => {
    setShowMenu(false)
    setShowActiveFilters(true)
    setShowResults(false)
    setShowFilters(false)

    switch (menuType) {
      case filterType.SHOW_MENU:
        setShowMenu(true)
        break
      case filterType.SHOW_RESULTS:
        setShowResults(true)
        break
      case filterType.SHOW_ACTIVE_FILTERS:
        setShowActiveFilters(true)
        break
      default:
        setShowFilters(true)
        setList(filterData[menuType].list)
        setLabel(filterData[menuType].label)
        break
    }
  }

  return (
    <>
      <div className="main-body">
        <button onClick={() => showFilter(filterType.SHOW_MENU)}>
          Choose Filter Type
        </button>
        <FilterMenu showFilter={showFilter} />
        {showFilters && <FilterChoose list={list} label={label} />}
      </div>
      <ShowActiveFilters />
      <ShowResults />
    </>
  )
}

export default AddFilter

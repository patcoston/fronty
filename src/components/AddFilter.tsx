import { FC, useState } from "react"
import FilterMenu from "./FilterMenu"
import FilterChoose from "./FilterChoose"
import { useStore } from "../store/StoreProvider"
import filterData from "../data/filter-data"
import * as filterType from "../utils/constants"
import "./AddFilter.css"

const AddFilter: FC = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false)
  const [list, setList] = useState<Array<string>>([])
  const [label, setLabel] = useState<string>("")
  const { setShowMenu, setShowResults } = useStore()

  const showFilter = (menuType: number) => {
    setShowMenu(false)
    setShowResults(false)
    setShowFilters(false)

    switch (menuType) {
      case filterType.SHOW_MENU:
        setShowMenu(true)
        break
      case filterType.SHOW_RESULTS:
        setShowResults(true)
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
      <div className="add-filter">
        <button onClick={() => showFilter(filterType.SHOW_MENU)}>
          Choose Filter Type
        </button>
        <FilterMenu showFilter={showFilter} />
        <FilterChoose show={showFilters} list={list} label={label} />
      </div>
      <div className="filters-added">Filters Added</div>
    </>
  )
}

export default AddFilter

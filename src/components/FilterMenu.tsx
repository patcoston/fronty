import { FC } from "react"
import filterData from "../data/filter-data"
import { useStore } from "../store/StoreProvider"
import "./FilterMenu.css"

interface Props {
  showFilter(arg: number): void
}

const FilterMenu: FC<Props> = ({ showFilter }) => {
  const { showMenu } = useStore()
  return (
    <>
      {showMenu && (
        <div className="filter-menu-body">
          <ul>
            {filterData.map((filter, index) => (
              <li onClick={() => showFilter(index)}>{filter.label}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default FilterMenu

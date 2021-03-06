import { FC } from "react"
import filterData from "../../data/filter-data"
import "./FilterMenu.scss"

/**
 * Filter Menu
 * Used By: Home
 * Purpose: Choose a filter type
 */

interface Props {
  showFilter(arg: number): void
}

const FilterMenu: FC<Props> = ({ showFilter }) => {
  return (
    <>
      <div className="filter-menu">
        <div className="filter-menu-body">
          <div className="filter-menu-header">Filter Types</div>
          <ul>
            {filterData.map((filter, index) => (
              <li key={index} onClick={() => showFilter(index)}>
                {filter.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default FilterMenu

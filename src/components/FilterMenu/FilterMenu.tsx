import { FC } from "react"
import filterData from "../../data/filter-data"
import clsx from "clsx"
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
    <div className="filter-menu">
      <div className={clsx("filter-menu-body", "border")}>
        <div className="filter-menu-header">Choose a Filter Type</div>
        <ul>
          {filterData.map((filter, index) => (
            <li key={index} onClick={() => showFilter(index)}>
              {filter.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FilterMenu

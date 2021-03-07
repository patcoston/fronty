import { FC } from "react"
import filterData from "../../data/filter-data"
import clsx from "clsx"
import "./FilterTypeMenu.scss"

/**
 * Filter Menu
 * Used By: Home
 * Purpose: Choose a filter type
 */

interface Props {
  showFilter(arg: number): void
}

const FilterTypeMenu: FC<Props> = ({ showFilter }) => {
  return (
    <div className="filter-type-menu">
      <div className={clsx("filter-type-menu-body", "border")}>
        <div className="filter-type-menu-header">Choose a Filter Type</div>
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

export default FilterTypeMenu

import { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import clsx from "clsx"
import "./FilterTypeMenu.scss"

/**
 * Filter Type Menu
 * Used By: Home
 * Purpose: Read and Display data for Filter Type so user can choose
 */

interface Props {
  showFilter(arg: number): void
}

const FilterTypeMenu: FC<Props> = ({ showFilter }) => {
  const { filterData } = useStore()

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

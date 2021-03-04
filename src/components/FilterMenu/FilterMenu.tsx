import { FC } from "react"
import filterData from "../../data/filter-data"
import { useStore } from "../../store/StoreProvider"
import CloseIcon from "../../svg/closeicon"
import "./FilterMenu.css"

interface Props {
  showFilter(arg: number): void
}

const FilterMenu: FC<Props> = ({ showFilter }) => {
  const { showMenu, setShowMenu } = useStore()
  return (
    <>
      {showMenu && (
        <div className="filter-menu-body">
          <div className="filter-menu-header">
            <div>Filter Types</div>
            <div
              className="filter-menu-close"
              onClick={() => setShowMenu(false)}
            >
              <CloseIcon />
            </div>
          </div>
          <ul>
            {filterData.map((filter, index) => (
              <li key={index} onClick={() => showFilter(index)}>
                {filter.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default FilterMenu

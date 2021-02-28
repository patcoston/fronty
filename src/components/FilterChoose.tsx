import { FC } from "react"
import { useStore } from "../store/StoreProvider"
import { IFilters } from "../utils/interfaces"
import { TFilters } from "../utils/types"
import CloseIcon from "../svg/closeicon"
import "./FilterChoose.css"

interface Props {
  list: Array<string>
  label: string
}

const FilterChoose: FC<Props> = ({ list, label }) => {
  const { activeFilters, setActiveFilters, setShowFilters } = useStore()
  const size = list.length < 21 ? list.length : 20

  const handleChange = () => {
    const itemList = document.getElementById(
      "filter-choose",
    ) as HTMLSelectElement
    const collection = itemList.selectedOptions as HTMLOptionsCollection
    const filters: TFilters = []
    for (let i: number = 0; i < collection.length; i++) {
      filters.push(collection[i].label)
    }
    const newActiveFitlers: IFilters = { ...activeFilters, [label]: filters }
    //console.log(Object.entries(newActiveFitlers))
    setActiveFilters(newActiveFitlers)
  }

  return (
    <>
      <div className="filter-choose-body">
        <div className="filter-choose-header">
          <div>Filter on {label}</div>
          <div
            className="filter-choose-close"
            onClick={() => setShowFilters(false)}
          >
            <CloseIcon />
          </div>
        </div>
        <select
          id="filter-choose"
          className="filter-choose-list"
          multiple
          size={size}
          onChange={handleChange}
        >
          {list.map(val => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default FilterChoose

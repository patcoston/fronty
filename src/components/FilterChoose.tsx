import { FC } from "react"
import "./FilterChoose.css"

interface Props {
  showFilter(arg: string): void
  show: boolean
  list: Array<string>
  label: string
}

const FilterMobile: FC<Props> = ({ showFilter, show, list, label }) => {
  const size = list.length < 21 ? list.length : 20
  return (
    <>
      {show && (
        <div className="filter-choose-body">
          <label htmlFor="filter-choose">Filter on {label}</label>
          <select
            id="filter-choose"
            className="filter-choose-list"
            multiple
            size={size}
          >
            {list.map(val => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
          <button onClick={() => showFilter("ShowResults")}>Add Filter</button>
        </div>
      )}
    </>
  )
}

export default FilterMobile

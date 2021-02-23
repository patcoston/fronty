import { FC } from "react"
import "./FilterChoose.css"

interface Props {
  show: boolean
  list: Array<string>
  label: string
}

const FilterChoose: FC<Props> = ({ show, list, label }) => {
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
        </div>
      )}
    </>
  )
}

export default FilterChoose

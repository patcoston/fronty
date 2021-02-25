import { FC } from "react"
import "./FilterChoose.css"

interface Props {
  list: Array<string>
  label: string
}

const handleChange = () => {
  const itemList = document.getElementById("filter-choose") as HTMLSelectElement
  const collection = itemList.selectedOptions as HTMLOptionsCollection
  for (let i: number = 0; i < collection.length; i++) {
    console.log(collection[i].label)
  }
}

const FilterChoose: FC<Props> = ({ list, label }) => {
  const size = list.length < 21 ? list.length : 20
  return (
    <>
      <div className="filter-choose-body">
        <label htmlFor="filter-choose">Filter on {label}</label>
        <select
          id="filter-choose"
          className="filter-choose-list"
          multiple
          size={size}
          onChange={() => handleChange()}
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

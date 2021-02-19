import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import { pets } from "../../data/pets"
import "./FilterPetsAllowed.css"

interface Props {
  showFilter(arg: string): void
}

const FilterPetsAllowed: FC<Props> = ({ showFilter }) => {
  const { filterShowPetsAllowed } = useStore()
  return (
    <>
      <div
        style={
          !filterShowPetsAllowed ? { display: "none" } : { display: "block" }
        }
        className="filter-pets-allowed-body"
      >
        <label htmlFor="choose-pets-allowed">Filter on Pets Allowed</label>
        <select
          id="choose-pets-allowed"
          className="filter-pets-allowed-list"
          multiple
          size={5}
        >
          {pets.map(val => (
            <option value={val}>{val}</option>
          ))}
        </select>
        <button onClick={() => showFilter("ShowResults")}>Submit Filter</button>
      </div>
    </>
  )
}

export default FilterPetsAllowed

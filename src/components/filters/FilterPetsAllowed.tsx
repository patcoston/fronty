import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
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
        Filter Pets Allowed
        <button onClick={() => showFilter("ShowResults")}>Submit Filter</button>
      </div>
    </>
  )
}

export default FilterPetsAllowed

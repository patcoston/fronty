import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterPetsAllowed.css"

const FilterPetsAllowed: FC = () => {
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
      </div>
    </>
  )
}

export default FilterPetsAllowed

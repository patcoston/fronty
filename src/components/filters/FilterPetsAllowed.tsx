import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"

const FilterPetsAllowed: FC = () => {
  const { filterShowPetsAllowed } = useStore()
  return (
    <>
      <div
        style={
          !filterShowPetsAllowed ? { display: "none" } : { display: "block" }
        }
      >
        Filter Pets Allowed
      </div>
    </>
  )
}

export default FilterPetsAllowed

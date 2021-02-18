import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"

const FilterEmployeeType: FC = () => {
  const { filterShowEmployeeType } = useStore()
  return (
    <>
      <div
        style={
          !filterShowEmployeeType ? { display: "none" } : { display: "block" }
        }
      >
        Filter Employee Type
      </div>
    </>
  )
}

export default FilterEmployeeType

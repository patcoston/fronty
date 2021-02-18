import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"

const FilterDressCode: FC = () => {
  const { filterShowDressCode } = useStore()
  return (
    <>
      <div
        style={
          !filterShowDressCode ? { display: "none" } : { display: "block" }
        }
      >
        Filter Dress Code
      </div>
    </>
  )
}

export default FilterDressCode

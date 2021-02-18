import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"

const FilterCompanySize: FC = () => {
  const { filterShowCompanySize } = useStore()
  return (
    <>
      <div
        style={
          !filterShowCompanySize ? { display: "none" } : { display: "block" }
        }
      >
        Filter Company Size
      </div>
    </>
  )
}

export default FilterCompanySize

import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterCompanySize.css"

const FilterCompanySize: FC = () => {
  const { filterShowCompanySize } = useStore()
  return (
    <>
      <div
        style={
          !filterShowCompanySize ? { display: "none" } : { display: "block" }
        }
        className="filter-company-size-body"
      >
        Filter Company Size
      </div>
    </>
  )
}

export default FilterCompanySize

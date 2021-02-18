import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterEducationRequired.css"

const FilterEducationRequired: FC = () => {
  const { filterShowEducationRequired } = useStore()
  return (
    <>
      <div
        style={
          !filterShowEducationRequired
            ? { display: "none" }
            : { display: "block" }
        }
        className="filter-education-required-body"
      >
        Filter Education Required
      </div>
    </>
  )
}

export default FilterEducationRequired

import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterExperienceLevel.css"

const FilterExperienceLevel: FC = () => {
  const { filterShowExperienceLevel } = useStore()
  return (
    <>
      <div
        style={
          !filterShowExperienceLevel
            ? { display: "none" }
            : { display: "block" }
        }
        className="filter-experience-level-body"
      >
        Filter Experience Level
      </div>
    </>
  )
}

export default FilterExperienceLevel

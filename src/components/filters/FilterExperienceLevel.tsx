import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterExperienceLevel.css"

interface Props {
  showFilter(arg: string): void
}

const FilterExperienceLevel: FC<Props> = ({ showFilter }) => {
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

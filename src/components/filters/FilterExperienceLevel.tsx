import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"

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
      >
        Filter Experience Level
      </div>
    </>
  )
}

export default FilterExperienceLevel

import React, { FC } from "react"
import FilterChoose from "../FilterChoose"
import { useStore } from "../../store/StoreProvider"
import { experience } from "../../data/experience"
import "./FilterExperienceLevel.css"

interface Props {
  showFilter(arg: string): void
}

const FilterExperienceLevel: FC<Props> = ({ showFilter }) => {
  const { filterShowExperienceLevel } = useStore()
  return (
    <FilterChoose
      showFilter={showFilter}
      show={filterShowExperienceLevel}
      list={experience}
      label={"Mobile"}
    />
  )
}

export default FilterExperienceLevel

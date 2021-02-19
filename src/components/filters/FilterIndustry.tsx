import React, { FC } from "react"
import FilterChoose from "../FilterChoose"
import { useStore } from "../../store/StoreProvider"
import { industry } from "../../data/industry"
import "./FilterIndustry.css"

interface Props {
  showFilter(arg: string): void
}

const FilterIndustry: FC<Props> = ({ showFilter }) => {
  const { filterShowIndustry } = useStore()
  return (
    <FilterChoose
      showFilter={showFilter}
      show={filterShowIndustry}
      list={industry}
      label={"Mobile"}
    />
  )
}

export default FilterIndustry

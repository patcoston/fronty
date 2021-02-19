import React, { FC } from "react"
import FilterChoose from "../FilterChoose"
import { useStore } from "../../store/StoreProvider"
import { education } from "../../data/education"

interface Props {
  showFilter(arg: string): void
}

const FilterEducationRequired: FC<Props> = ({ showFilter }) => {
  const { filterShowEducationRequired } = useStore()
  return (
    <FilterChoose
      showFilter={showFilter}
      show={filterShowEducationRequired}
      list={education}
      label={"Education Required"}
    />
  )
}

export default FilterEducationRequired

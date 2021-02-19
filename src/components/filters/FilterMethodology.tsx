import React, { FC } from "react"
import FilterChoose from "../FilterChoose"
import { useStore } from "../../store/StoreProvider"
import { methodology } from "../../data/methodology"

interface Props {
  showFilter(arg: string): void
}

const FilterMethodology: FC<Props> = ({ showFilter }) => {
  const { filterShowMethodology } = useStore()
  return (
    <FilterChoose
      showFilter={showFilter}
      show={filterShowMethodology}
      list={methodology}
      label={"Mobile"}
    />
  )
}

export default FilterMethodology

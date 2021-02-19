import React, { FC } from "react"
import FilterChoose from "../FilterChoose"
import { useStore } from "../../store/StoreProvider"
import { internalExternal } from "../../data/internal-external"

interface Props {
  showFilter(arg: string): void
}

const FilterInternalExternal: FC<Props> = ({ showFilter }) => {
  const { filterShowInternalExternal } = useStore()
  return (
    <FilterChoose
      showFilter={showFilter}
      show={filterShowInternalExternal}
      list={internalExternal}
      label={"Mobile"}
    />
  )
}

export default FilterInternalExternal

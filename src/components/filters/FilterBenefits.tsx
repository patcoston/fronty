import React, { FC } from "react"
import FilterChoose from "../FilterChoose"
import { useStore } from "../../store/StoreProvider"
import { benefits } from "../../data/benefits"
import "./FilterBenefits.css"

interface Props {
  showFilter(arg: string): void
}

const FilterBenefits: FC<Props> = ({ showFilter }) => {
  const { filterShowBenefits } = useStore()
  return (
    <FilterChoose
      showFilter={showFilter}
      show={filterShowBenefits}
      list={benefits}
      label={"Benefits"}
    />
  )
}

export default FilterBenefits

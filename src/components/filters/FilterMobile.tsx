import React, { FC } from "react"
import FilterChoose from "../FilterChoose"
import { useStore } from "../../store/StoreProvider"
import { mobile } from "../../data/mobile"
import "./FilterMobile.css"

interface Props {
  showFilter(arg: string): void
}

const FilterMobile: FC<Props> = ({ showFilter }) => {
  const { filterShowMobile } = useStore()
  return (
    <FilterChoose
      showFilter={showFilter}
      show={filterShowMobile}
      list={mobile}
      label={"Mobile"}
    />
  )
}

export default FilterMobile

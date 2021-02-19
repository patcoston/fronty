import React, { FC } from "react"
import FilterChoose from "../FilterChoose"
import { useStore } from "../../store/StoreProvider"
import { pets } from "../../data/pets"
import "./FilterPetsAllowed.css"

interface Props {
  showFilter(arg: string): void
}

const FilterPetsAllowed: FC<Props> = ({ showFilter }) => {
  const { filterShowPetsAllowed } = useStore()
  return (
    <FilterChoose
      showFilter={showFilter}
      show={filterShowPetsAllowed}
      list={pets}
      label={"Pets Allowed"}
    />
  )
}

export default FilterPetsAllowed

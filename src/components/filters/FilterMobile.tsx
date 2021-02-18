import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterMobile.css"

interface Props {
  showFilter(arg: string): void
}

const FilterMobile: FC<Props> = ({ showFilter }) => {
  const { filterShowMobile } = useStore()
  return (
    <>
      <div
        style={!filterShowMobile ? { display: "none" } : { display: "block" }}
        className="filter-mobile-body"
      >
        Filter Mobile
      </div>
    </>
  )
}

export default FilterMobile

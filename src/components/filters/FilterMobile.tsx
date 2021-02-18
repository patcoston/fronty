import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterMobile.css"

const FilterMobile: FC = () => {
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

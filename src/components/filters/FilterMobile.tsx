import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"

const FilterMobile: FC = () => {
  const { filterShowMobile } = useStore()
  return (
    <>
      <div
        style={!filterShowMobile ? { display: "none" } : { display: "block" }}
      >
        Filter Mobile
      </div>
    </>
  )
}

export default FilterMobile

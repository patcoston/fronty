import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterWorkingFromHome.css"

const FilterWorkingFromHome: FC = () => {
  const { filterShowWorkingFromHome } = useStore()
  return (
    <>
      <div
        style={
          !filterShowWorkingFromHome
            ? { display: "none" }
            : { display: "block" }
        }
        className="filter-working-from-home-body"
      >
        Filter Working FromHome
      </div>
    </>
  )
}

export default FilterWorkingFromHome

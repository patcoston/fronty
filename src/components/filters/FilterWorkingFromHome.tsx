import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"

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
      >
        Filter Working FromHome
      </div>
    </>
  )
}

export default FilterWorkingFromHome

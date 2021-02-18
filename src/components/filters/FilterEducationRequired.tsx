import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"

const FilterEducationRequired: FC = () => {
  const { filterShowEducationRequired } = useStore()
  return (
    <>
      <div
        style={
          !filterShowEducationRequired
            ? { display: "none" }
            : { display: "block" }
        }
      >
        Filter Education Required
      </div>
    </>
  )
}

export default FilterEducationRequired

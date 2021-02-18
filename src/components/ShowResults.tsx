import React, { FC } from "react"
import { useStore } from "../store/StoreProvider"

const ShowResults: FC = () => {
  const { showResults } = useStore()
  return (
    <>
      <div style={!showResults ? { display: "none" } : { display: "block" }}>
        Show Results
      </div>
    </>
  )
}

export default ShowResults

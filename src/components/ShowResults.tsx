import React, { FC } from "react"
import { useStore } from "../store/StoreProvider"
import "./ShowResults.css"

const ShowResults: FC = () => {
  const { showResults } = useStore()
  return <>{showResults && <div className="show-results">Show Results</div>}</>
}

export default ShowResults

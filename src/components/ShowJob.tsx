import { FC } from "react"
import { useStore } from "../store/StoreProvider"
import filterData from "../data/filter-data"
import { rand } from "../utils/tools"
import * as showType from "../utils/constants"
import "./ShowJob.css"

interface Props {
  companyName: string
  skills: string
}

const ShowJob: FC<Props> = ({ companyName, skills }) => {
  const { showMenu, setShowMenu } = useStore()

  return (
    <>
      <div className="show-job">
        <h3>{companyName}</h3>
        {skills}
      </div>
    </>
  )
}

export default ShowJob

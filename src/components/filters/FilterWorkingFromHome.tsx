import { FC } from "react"
import FilterChoose from "../FilterChoose"
import { useStore } from "../../store/StoreProvider"
import { percentWfh } from "../../data/working-from-home"

interface Props {
  showFilter(arg: string): void
}

const FilterWorkingFromHome: FC<Props> = ({ showFilter }) => {
  const { filterShowWorkingFromHome } = useStore()
  return (
    <FilterChoose
      showFilter={showFilter}
      show={filterShowWorkingFromHome}
      list={percentWfh}
      label={"Working from Home"}
    />
  )
}

export default FilterWorkingFromHome

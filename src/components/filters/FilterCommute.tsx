import { FC } from "react"
import FilterChoose from "../FilterChoose"
import { useStore } from "../../store/StoreProvider"
import { commute } from "../../data/commute"

interface Props {
  showFilter(arg: string): void
}

const FilterCommute: FC<Props> = ({ showFilter }) => {
  const { filterShowCommute } = useStore()
  return (
    <FilterChoose
      showFilter={showFilter}
      show={filterShowCommute}
      list={commute}
      label={"Commute"}
    />
  )
}

export default FilterCommute

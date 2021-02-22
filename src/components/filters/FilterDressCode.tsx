import { FC } from "react"
import FilterChoose from "../FilterChoose"
import { useStore } from "../../store/StoreProvider"
import { dressCode } from "../../data/dress-code"

interface Props {
  showFilter(arg: string): void
}

const FilterDressCode: FC<Props> = ({ showFilter }) => {
  const { filterShowDressCode } = useStore()
  return (
    <>
      <FilterChoose
        showFilter={showFilter}
        show={filterShowDressCode}
        list={dressCode}
        label={"Dress Code"}
      />
    </>
  )
}

export default FilterDressCode

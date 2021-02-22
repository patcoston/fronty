import { FC } from "react"
import FilterChoose from "../FilterChoose"
import { useStore } from "../../store/StoreProvider"
import { company } from "../../data/company"

interface Props {
  showFilter(arg: string): void
}

const FilterCompany: FC<Props> = ({ showFilter }) => {
  const { filterShowCompany } = useStore()
  return (
    <FilterChoose
      showFilter={showFilter}
      show={filterShowCompany}
      list={company}
      label={"Popular Companies"}
    />
  )
}

export default FilterCompany

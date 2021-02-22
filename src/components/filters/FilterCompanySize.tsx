import { FC } from "react"
import FilterChoose from "../FilterChoose"
import { useStore } from "../../store/StoreProvider"
import { companySize } from "../../data/company-size"

interface Props {
  showFilter(arg: string): void
}

const FilterCompanySize: FC<Props> = ({ showFilter }) => {
  const { filterShowCompanySize } = useStore()
  return (
    <FilterChoose
      showFilter={showFilter}
      show={filterShowCompanySize}
      list={companySize}
      label={"Company Size"}
    />
  )
}

export default FilterCompanySize

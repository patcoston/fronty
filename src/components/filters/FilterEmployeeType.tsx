import { FC } from "react"
import FilterChoose from "../FilterChoose"
import { useStore } from "../../store/StoreProvider"
import { employeeType } from "../../data/employee-type"

interface Props {
  showFilter(arg: string): void
}

const FilterEmployeeType: FC<Props> = ({ showFilter }) => {
  const { filterShowEmployeeType } = useStore()
  return (
    <FilterChoose
      showFilter={showFilter}
      show={filterShowEmployeeType}
      list={employeeType}
      label={"Employee Type"}
    />
  )
}

export default FilterEmployeeType

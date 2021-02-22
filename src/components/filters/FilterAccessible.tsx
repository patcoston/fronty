import { FC } from "react"
import FilterChoose from "../FilterChoose"
import { useStore } from "../../store/StoreProvider"
import { accessibility } from "../../data/accessibility"

interface Props {
  showFilter(arg: string): void
}

const FilterAccessible: FC<Props> = ({ showFilter }) => {
  const { filterShowAccessible } = useStore()
  return (
    <FilterChoose
      showFilter={showFilter}
      show={filterShowAccessible}
      list={accessibility}
      label={"Accessibility"}
    />
  )
}

export default FilterAccessible

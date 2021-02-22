import { FC } from "react"
import FilterChoose from "../FilterChoose"
import { useStore } from "../../store/StoreProvider"
import { skills } from "../../data/skills"

interface Props {
  showFilter(arg: string): void
}

const FilterSkill: FC<Props> = ({ showFilter }) => {
  const { filterShowSkill } = useStore()
  return (
    <FilterChoose
      showFilter={showFilter}
      show={filterShowSkill}
      list={skills}
      label={"Skill"}
    />
  )
}

export default FilterSkill

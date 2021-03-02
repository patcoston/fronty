import { FC, useState } from "react"
import { useStore } from "../store/StoreProvider"
import { useHistory } from "react-router-dom"
import filterData from "../data/filter-data"
import { rand } from "../utils/tools"
import { SHOW_FILTER_COMPANY, SHOW_FILTER_SKILL } from "../utils/constants"
import "./ShowResults.css"

const getSkills = () => {
  const skills: Array<string> = []
  const len: number = filterData[SHOW_FILTER_SKILL].list.length
  for (let i: number = 0; i < 10; i++) {
    let rnd: number = rand(1, len - 1)
    skills.push(filterData[SHOW_FILTER_SKILL].list[rnd])
  }
  //console.log(skills)
  //const uniqueSkills = [...new Set(skills)]
  return skills
}

const ShowResults: FC = () => {
  const {
    showResults,
    activeFilters,
    setShowJobCompany,
    setShowJobSkills,
  } = useStore()
  const activeFilterArray = Object.entries(activeFilters)
  const filtersToShow: boolean = activeFilterArray.length > 0
  const show: boolean = showResults && filtersToShow
  const companyIndex: Array<number> = []
  const companySkills: Array<string> = []
  const len: number = filterData[SHOW_FILTER_COMPANY].list.length
  const history = useHistory()

  type TNext = { label: string; selected: string }[]

  const [next, setNext] = useState<TNext>([
    { label: "1", selected: "selected" },
    { label: "2", selected: "" },
    { label: "3", selected: "" },
    { label: "4", selected: "" },
    { label: "5", selected: "" },
    { label: ">", selected: "" },
  ])

  for (let i: number = 0; i < 10; i++) {
    let rnd: number = rand(1, len - 1)
    companyIndex.push(rnd)
    let skills = getSkills().join().replace(/,/g, ", ")
    companySkills.push(skills)
  }

  const handleClick = (index: number) => {
    const companyNum = companyIndex[index]
    setShowJobCompany(filterData[SHOW_FILTER_COMPANY].list[companyNum])
    setShowJobSkills(companySkills[index])
    history.push(`/job`)
  }

  const handleSelectNext = (index: number) => {
    const newNext = [...next]
    newNext.forEach(obj => (obj.selected = ""))
    newNext[index].selected = "selected"
    setNext(newNext)
  }

  return (
    <>
      {show && (
        <section className="show-results-wrapper">
          <h3>Results</h3>
          <div className="show-results">
            {companyIndex.map((company, index) => (
              <section key={index} onClick={() => handleClick(index)}>
                <strong>
                  {filterData[SHOW_FILTER_COMPANY].list[company]}:
                </strong>{" "}
                {companySkills[index]}
              </section>
            ))}
            <div className="show-results-next">
              <ul>
                {next.map((val, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelectNext(index)}
                    className={val.selected}
                  >
                    {val.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default ShowResults

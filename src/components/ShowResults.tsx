import { FC } from "react"
import { useStore } from "../store/StoreProvider"
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
    setShowJob,
    setShowJobCompany,
    setShowJobSkills,
  } = useStore()
  const activeFilterArray = Object.entries(activeFilters)
  const filtersToShow: boolean = activeFilterArray.length > 0
  const show: boolean = showResults && filtersToShow
  const companyIndex: Array<number> = []
  const companySkills: Array<string> = []
  const len: number = filterData[SHOW_FILTER_COMPANY].list.length

  const next: { label: string; selected: boolean }[] = [
    { label: "1", selected: true },
    { label: "2", selected: false },
    { label: "3", selected: false },
    { label: "4", selected: false },
    { label: "5", selected: false },
    { label: ">", selected: false },
  ]

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
    setShowJob(true)
  }

  const handleSelectNext = (index: number) => {
    console.log(index)
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
                  <li key={index} onClick={() => handleSelectNext(index)}>
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

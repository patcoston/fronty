import { FC } from "react"
import { useStore } from "../store/StoreProvider"
import filterData from "../data/filter-data"
import { rand } from "../utils/tools"
import { SHOW_FILTER_COMPANY, SHOW_FILTER_SKILL } from "../utils/constants"
import ShowJob from "./ShowJob"
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
  const { showResults, activeFilters } = useStore()
  const activeFilterArray = Object.entries(activeFilters)
  const filtersToShow: boolean = activeFilterArray.length > 0
  const show: boolean = showResults && filtersToShow
  const companyIndex: Array<number> = []
  const companySkills: Array<string> = []
  const len: number = filterData[SHOW_FILTER_COMPANY].list.length
  for (let i: number = 0; i < 10; i++) {
    let rnd: number = rand(1, len - 1)
    companyIndex.push(rnd)
    let skills = getSkills().join().replace(/,/g, ", ")
    companySkills.push(skills)
  }

  const handleClick = (index: number) => {
    const companyNum = companyIndex[index]
    console.log(filterData[SHOW_FILTER_COMPANY].list[companyNum])
    console.log(companySkills[index])
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
                <li className="selected">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>&gt;</li>
              </ul>
            </div>
          </div>
        </section>
      )}
      <ShowJob companyName={"Microsoft"} skills={"JavaScript HTML CSS"} />
    </>
  )
}

export default ShowResults

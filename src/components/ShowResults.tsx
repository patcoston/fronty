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
  const { showResults, activeFilters } = useStore()
  const activeFilterArray = Object.entries(activeFilters)
  const filtersToShow: boolean = activeFilterArray.length > 0
  const show: boolean = showResults && filtersToShow
  const companies: Array<string> = []
  const len: number = filterData[SHOW_FILTER_COMPANY].list.length
  for (let i: number = 0; i < 10; i++) {
    let rnd: number = rand(1, len - 1)
    companies.push(filterData[SHOW_FILTER_COMPANY].list[rnd])
  }

  return (
    <>
      {show && (
        <section className="show-results-wrapper">
          <h3>Results</h3>
          <div className="show-results">
            {companies.map(company => (
              <section key={rand(0, 1000)}>
                <strong>{company}:</strong>{" "}
                {getSkills().join().replace(/,/g, ", ")}
              </section>
            ))}
          </div>
        </section>
      )}
    </>
  )
}

export default ShowResults

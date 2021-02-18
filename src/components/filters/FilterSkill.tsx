import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterSkill.css"

const FilterSkill: FC = () => {
  const { filterShowSkill } = useStore()
  return (
    <>
      <div
        style={!filterShowSkill ? { display: "none" } : { display: "block" }}
        className="filter-skill-body"
      >
        <div>
          <label className="filter-skill-type-skill-label">
            Type desired tech to filter list below
          </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="choose-skill" className="filter-skills-choose-label">
            Choose one or more skills
          </label>
          <select id="choose-skill" className="filter-skill-list" multiple>
            <option value="">JavaScript ES5 ECMAScript 5 2009</option>
            <option value="">JavaScript ES6 ECMAScript 2015</option>
            <option value="">JavaScript ES7 ECMAScript 2016</option>
            <option value="">JavaScript ES8 ECMAScript 2017</option>
            <option value="">JavaScript ES9 ECMAScript 2018</option>
            <option value="">JavaScript ES10 ECMAScript 2019</option>
            <option value="">JavaScript ES11 ECMAScript 2020</option>
            <option value="">JavaScript ES12 ECMAScript 2021</option>
            <option value="">HTML 3.x</option>
            <option value="">HTML 4.x</option>
            <option value="">HTML5</option>
            <option value="">CSS1</option>
            <option value="">CSS2</option>
            <option value="">CSS3</option>
            <option value="">CSS4</option>
            <option value="">React 15.x</option>
            <option value="">React 16.x</option>
            <option value="">React 17.x</option>
            <option value="">Angular JS 1.x</option>
            <option value="">Angular 2.x</option>
            <option value="">Angular 4.x</option>
            <option value="">Angular 5.x</option>
            <option value="">Angular 6.x</option>
            <option value="">Angular 7.x</option>
            <option value="">Angular 8.x</option>
            <option value="">Angular 9.x</option>
            <option value="">Vue 0.x</option>
            <option value="">Vue 1.x</option>
            <option value="">Vue 2.x</option>
            <option value="">Vue 3.x</option>
            <option value="">jQuery 1.x</option>
            <option value="">jQuery 2.x</option>
            <option value="">jQuery 3.x</option>
          </select>
          <button>Submit Filter</button>
        </div>
      </div>
    </>
  )
}

export default FilterSkill

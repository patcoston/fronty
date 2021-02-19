import React, { FC } from "react"
import { skills } from "../data/skills"
import "./SelectSkills.css"

const SelectSkills: FC = () => {
  return (
    <>
      <div>
        <select
          id="choose-skill"
          className="filter-skill-list"
          multiple
          size={10}
        >
          {skills.map(skill => (
            <option value={skill}>{skill}</option>
          ))}
        </select>
      </div>
    </>
  )
}

export default SelectSkills

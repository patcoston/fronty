import { createContext, FC, useState, useContext } from "react"

export interface Store {
  filterShowMenu: boolean
  setFilterShowMenu: (show: boolean) => void
  filterShowAccessible: boolean
  setFilterShowAccessible: (show: boolean) => void
  filterShowBenefits: boolean
  setFilterShowBenefits: (show: boolean) => void
  filterShowCommute: boolean
  setFilterShowCommute: (show: boolean) => void
  filterShowCompanySize: boolean
  setFilterShowCompanySize: (show: boolean) => void
  filterShowDressCode: boolean
  setFilterShowDressCode: (show: boolean) => void
  filterShowEducationRequired: boolean
  setFilterShowEducationRequired: (show: boolean) => void
  filterShowEmployeeType: boolean
  setFilterShowEmployeeType: (show: boolean) => void
  filterShowExperienceLevel: boolean
  setFilterShowExperienceLevel: (show: boolean) => void
  filterShowIndustry: boolean
  setFilterShowIndustry: (show: boolean) => void
  filterShowInternalExternal: boolean
  setFilterShowInternalExternal: (show: boolean) => void
  filterShowMethodology: boolean
  setFilterShowMethodology: (show: boolean) => void
  filterShowMobile: boolean
  setFilterShowMobile: (show: boolean) => void
  filterShowPetsAllowed: boolean
  setFilterShowPetsAllowed: (show: boolean) => void
  filterShowPayment: boolean
  setFilterShowPayment: (show: boolean) => void
  filterShowSkill: boolean
  setFilterShowSkill: (show: boolean) => void
  filterShowWorkingFromHome: boolean
  setFilterShowWorkingFromHome: (show: boolean) => void
  filterShowCompany: boolean
  setFilterShowCompany: (show: boolean) => void
  showResults: boolean
  setShowResults: (show: boolean) => void
}

export const StoreContext = createContext({} as Store)

export const useStore = () => useContext<Store>(StoreContext)

const StoreProvider: FC = ({ children }) => {
  const [filterShowMenu, setFilterShowMenu] = useState<boolean>(false)
  const [filterShowAccessible, setFilterShowAccessible] = useState<boolean>(
    false,
  )
  const [filterShowBenefits, setFilterShowBenefits] = useState<boolean>(false)
  const [filterShowCommute, setFilterShowCommute] = useState<boolean>(false)
  const [filterShowCompanySize, setFilterShowCompanySize] = useState<boolean>(
    false,
  )
  const [filterShowDressCode, setFilterShowDressCode] = useState<boolean>(false)
  const [
    filterShowEducationRequired,
    setFilterShowEducationRequired,
  ] = useState<boolean>(false)
  const [filterShowEmployeeType, setFilterShowEmployeeType] = useState<boolean>(
    false,
  )
  const [
    filterShowExperienceLevel,
    setFilterShowExperienceLevel,
  ] = useState<boolean>(false)
  const [filterShowIndustry, setFilterShowIndustry] = useState<boolean>(false)
  const [
    filterShowInternalExternal,
    setFilterShowInternalExternal,
  ] = useState<boolean>(false)
  const [filterShowMethodology, setFilterShowMethodology] = useState<boolean>(
    false,
  )
  const [filterShowMobile, setFilterShowMobile] = useState<boolean>(false)
  const [filterShowPetsAllowed, setFilterShowPetsAllowed] = useState<boolean>(
    false,
  )
  const [filterShowPayment, setFilterShowPayment] = useState<boolean>(false)
  const [filterShowSkill, setFilterShowSkill] = useState<boolean>(false)
  const [filterShowCompany, setFilterShowCompany] = useState<boolean>(false)
  const [
    filterShowWorkingFromHome,
    setFilterShowWorkingFromHome,
  ] = useState<boolean>(false)
  const [showResults, setShowResults] = useState<boolean>(false)

  const store: Store = {
    filterShowMenu,
    setFilterShowMenu,
    filterShowAccessible,
    setFilterShowAccessible,
    filterShowBenefits,
    setFilterShowBenefits,
    filterShowCommute,
    setFilterShowCommute,
    filterShowCompanySize,
    setFilterShowCompanySize,
    filterShowDressCode,
    setFilterShowDressCode,
    filterShowEducationRequired,
    setFilterShowEducationRequired,
    filterShowEmployeeType,
    setFilterShowEmployeeType,
    filterShowExperienceLevel,
    setFilterShowExperienceLevel,
    filterShowIndustry,
    setFilterShowIndustry,
    filterShowInternalExternal,
    setFilterShowInternalExternal,
    filterShowMethodology,
    setFilterShowMethodology,
    filterShowMobile,
    setFilterShowMobile,
    filterShowPetsAllowed,
    setFilterShowPetsAllowed,
    filterShowPayment,
    setFilterShowPayment,
    filterShowSkill,
    setFilterShowSkill,
    filterShowWorkingFromHome,
    setFilterShowWorkingFromHome,
    showResults,
    setShowResults,
    filterShowCompany,
    setFilterShowCompany,
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreProvider

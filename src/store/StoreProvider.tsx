import { createContext, FC, useState, useContext } from "react"
import { IFilters } from "../utils/interfaces"
import { TFilterDataArray } from "../utils/types"

export interface Store {
  filterData: TFilterDataArray
  setFilterData: (filters: TFilterDataArray) => void
  showFilterTypeMenu: boolean
  setShowFilterTypeMenu: (show: boolean) => void
  activeFilters: IFilters
  setActiveFilters: (activeFilters: IFilters) => void
  showResults: boolean
  setShowResults: (show: boolean) => void
  showJobCompany: string
  setShowJobCompany: (company: string) => void
  showJobSkills: string
  setShowJobSkills: (company: string) => void
}

export const StoreContext = createContext({} as Store)

export const useStore = () => useContext<Store>(StoreContext)

const StoreProvider: FC = ({ children }) => {
  const [filterData, setFilterData] = useState<TFilterDataArray>([])
  const [showFilterTypeMenu, setShowFilterTypeMenu] = useState<boolean>(true)
  const [activeFilters, setActiveFilters] = useState<IFilters>({})
  const [showResults, setShowResults] = useState<boolean>(false)
  const [showJobCompany, setShowJobCompany] = useState<string>("")
  const [showJobSkills, setShowJobSkills] = useState<string>("")
  const store: Store = {
    filterData,
    setFilterData,
    showFilterTypeMenu,
    setShowFilterTypeMenu,
    activeFilters,
    setActiveFilters,
    showResults,
    setShowResults,
    showJobCompany,
    setShowJobCompany,
    showJobSkills,
    setShowJobSkills,
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreProvider

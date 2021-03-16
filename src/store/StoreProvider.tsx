import { FC, useState, createContext, useContext } from "react"
import { IFilters } from "../utils/interfaces"
import { TFilterDataArray } from "../utils/types"
import { Store } from "../utils/interfaces"

const StoreContext = createContext({} as Store)

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

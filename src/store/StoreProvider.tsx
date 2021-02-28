import { createContext, FC, useState, useContext } from "react"
import { IFilters } from "../utils/interfaces"

export interface Store {
  showMenu: boolean
  setShowMenu: (show: boolean) => void
  showFilters: boolean
  setShowFilters: (show: boolean) => void
  showActiveFilters: boolean
  setShowActiveFilters: (show: boolean) => void
  activeFilters: IFilters
  setActiveFilters: (activeFilters: IFilters) => void
  showResults: boolean
  setShowResults: (show: boolean) => void
}

export const StoreContext = createContext({} as Store)

export const useStore = () => useContext<Store>(StoreContext)

const StoreProvider: FC = ({ children }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showFilters, setShowFilters] = useState<boolean>(false)
  const [showActiveFilters, setShowActiveFilters] = useState<boolean>(false)
  const [activeFilters, setActiveFilters] = useState<IFilters>({})
  const [showResults, setShowResults] = useState<boolean>(false)

  const store: Store = {
    showMenu,
    setShowMenu,
    showFilters,
    setShowFilters,
    showActiveFilters,
    setShowActiveFilters,
    activeFilters,
    setActiveFilters,
    showResults,
    setShowResults,
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreProvider

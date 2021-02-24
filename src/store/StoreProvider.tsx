import { createContext, FC, useState, useContext } from "react"

export interface Store {
  showMenu: boolean
  setShowMenu: (show: boolean) => void
  showActiveFilters: boolean
  setShowActiveFilters: (show: boolean) => void
  showResults: boolean
  setShowResults: (show: boolean) => void
}

export const StoreContext = createContext({} as Store)

export const useStore = () => useContext<Store>(StoreContext)

const StoreProvider: FC = ({ children }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showActiveFilters, setShowActiveFilters] = useState<boolean>(false)
  const [showResults, setShowResults] = useState<boolean>(false)

  const store: Store = {
    showMenu,
    setShowMenu,
    showActiveFilters,
    setShowActiveFilters,
    showResults,
    setShowResults,
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreProvider

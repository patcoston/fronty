import { createContext, FC, useState, useContext } from "react"

export interface Store {
  filterShowMenu: boolean
  setFilterShowMenu: (show: boolean) => void
  showResults: boolean
  setShowResults: (show: boolean) => void
}

export const StoreContext = createContext({} as Store)

export const useStore = () => useContext<Store>(StoreContext)

const StoreProvider: FC = ({ children }) => {
  const [filterShowMenu, setFilterShowMenu] = useState<boolean>(false)
  const [showResults, setShowResults] = useState<boolean>(false)

  const store: Store = {
    filterShowMenu,
    setFilterShowMenu,
    showResults,
    setShowResults,
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreProvider

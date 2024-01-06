/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useState } from 'react';

type NavMenuContextType = {
  isNavOpen: boolean;
  toggleNav: () => void;
};

const NavMenuContext = createContext<NavMenuContextType | null>(null);

export function useNavMenuContext() {
  const value = useContext(NavMenuContext);
  if (value == null) throw Error('Cannot use it outside sidebar provider');
  return value;
}

type NavMenuContextProviderProps = {
  children: ReactNode;
};
function NavMenuContextProvider({ children }: NavMenuContextProviderProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNav() {
    setIsNavOpen((isNavOpen) => !isNavOpen);
    document.body.classList.toggle('overflow-y-hidden');
  }

  return (
    <NavMenuContext.Provider value={{ isNavOpen, toggleNav }}>
      {children}
    </NavMenuContext.Provider>
  );
}

export default NavMenuContextProvider;

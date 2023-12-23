/* eslint-disable react-refresh/only-export-components */
import { AnimationControls, useAnimation } from 'framer-motion';
import { ReactNode, createContext, useContext, useState } from 'react';

type NavMenuContextType = {
  isNavOpen: boolean;
  toggleNav: () => void;
  navControl: AnimationControls;
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
  const navControl = useAnimation();

  function toggleNav() {
    if (isNavOpen) navControl.start('close');
    else navControl.start('open');
    setIsNavOpen((isNavOpen) => !isNavOpen);
  }

  return (
    <NavMenuContext.Provider value={{ isNavOpen, toggleNav, navControl }}>
      {children}
    </NavMenuContext.Provider>
  );
}

export default NavMenuContextProvider;

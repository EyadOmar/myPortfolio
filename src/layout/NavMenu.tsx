import { AnimatePresence, motion } from 'framer-motion';
import { useNavMenuContext } from '../contexts/NavMenuContext';
import { useTranslation } from 'react-i18next';

function NavMenu() {
  const { isNavOpen, toggleNav } = useNavMenuContext();
  const linksHover = { letterSpacing: '10px' };
  const { t } = useTranslation();
  return (
    <AnimatePresence>
      {isNavOpen && (
        <motion.nav
          initial={{ x: -2000, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: -2000, opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, ease: 'backInOut' }}
          className="fixed z-10 inset-0 w-screen h-screen bg-white dark:bg-[#222] px-10 tracking-[-3px] flex flex-col justify-center  gap-5 text-5xl lg:text-7xl uppercase italic transition-colors"
        >
          <motion.a onClick={toggleNav} whileHover={linksHover} href="#home">
            {t('home')}
          </motion.a>
          <motion.a onClick={toggleNav} whileHover={linksHover} href="#about">
            {t('about')}
          </motion.a>
          <motion.a onClick={toggleNav} whileHover={linksHover} href="#home">
            {t('projects')}
          </motion.a>
          <motion.a onClick={toggleNav} whileHover={linksHover} href="#home">
            {t('contact')}
          </motion.a>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default NavMenu;

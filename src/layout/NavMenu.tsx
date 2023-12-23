import { motion } from 'framer-motion';
import { useNavMenuContext } from '../contexts/NavMenuContext';
import { useTranslation } from 'react-i18next';

function NavMenu() {
  const { navControl } = useNavMenuContext();
  const navVariants = {
    close: {
      x: -2000,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  };
  const linksHover = { letterSpacing: '10px' };
  const { t } = useTranslation();
  return (
    <motion.nav
      variants={navVariants}
      initial="close"
      animate={navControl}
      transition={{ duration: 0.5, ease: 'backInOut' }}
      className="px-10 tracking-[-3px] flex flex-col justify-end gap-5 text-5xl lg:text-7xl uppercase italic transition-colors"
    >
      <motion.a whileHover={linksHover} href="/">
        {t('home')}
      </motion.a>
      <motion.a whileHover={linksHover} href="/">
        {t('about')}
      </motion.a>
      <motion.a whileHover={linksHover} href="/">
        {t('projects')}
      </motion.a>
      <motion.a whileHover={linksHover} href="/">
        {t('contact')}
      </motion.a>
    </motion.nav>
  );
}

export default NavMenu;

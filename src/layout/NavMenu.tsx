import { motion } from 'framer-motion';
import { useNavMenuContext } from '../contexts/NavMenuContext';

function NavMenu() {
  const { navControl } = useNavMenuContext();
  const navVariants = {
    close: {
      x: -1000,
    },
    open: {
      x: 0,
    },
  };
  const linksHover = { letterSpacing: '10px' };
  return (
    <motion.nav
      variants={navVariants}
      initial="close"
      animate={navControl}
      className="px-5 tracking-[-5px] flex flex-col justify-end gap-5 text-5xl lg:text-7xl uppercase italic transition-colors"
    >
      <motion.a whileHover={linksHover} href="/">
        Home
      </motion.a>
      <motion.a whileHover={linksHover} href="/">
        About
      </motion.a>
      <motion.a whileHover={linksHover} href="/">
        Projects
      </motion.a>
      <motion.a whileHover={linksHover} href="/">
        Contact
      </motion.a>
    </motion.nav>
  );
}

export default NavMenu;

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronsUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function ToTop() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const toTopHandler = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toTopHandler}
          className="fixed right-6 bottom-8 p-2 z-30 rounded-full bg-black text-white dark:bg-white dark:text-black"
          title={t('to-Top')}
        >
          <ChevronsUp className="w-9 h-9 md:w-12 md:h-12" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ToTop;

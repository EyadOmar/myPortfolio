import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useNavMenuContext } from '../contexts/NavMenuContext';

function PageHeader() {
  const { isNavOpen, toggleNav } = useNavMenuContext();
  const { t } = useTranslation();
  const [currLang, setCurrLang] = useState(
    i18n.language === 'en' ? 'ar' : 'en'
  );
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains('dark')
  );

  function darkHandler() {
    document.documentElement.classList.toggle('dark');
    setIsDark((s) => !s);
  }

  function toggleLang() {
    i18n.changeLanguage(currLang);
    const isEn = currLang === 'en';
    document.documentElement.dir = isEn ? 'ltr' : 'rtl';

    setCurrLang(isEn ? 'ar' : 'en');
  }

  const variant = isNavOpen ? 'opened' : 'closed';
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 7,
    },
  };

  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -9,
    },
  };

  return (
    <header className="fixed z-50 lg:h-36 h-24 mx-auto top-0 px-5 lg:px-10 flex justify-between items-center w-full">
      <a href="/">
        <img
          src={isDark ? '/eyad-logo-light.png' : '/eyad-logo.png'}
          alt="eyad omar logo"
          className="w-12 h-12 rounded-full"
        />
      </a>
      <div className="flex items-center">
        <button
          onClick={toggleLang}
          className="text-lg hover:tracking-wider transition-all uppercase"
          title={t('language')}
        >
          {currLang}
        </button>
        <button
          onClick={darkHandler}
          className="mx-5 lg:mx-7 outline-none border-none"
          title={t('theme')}
        >
          {isDark ? (
            <Sun className=" hover:text-yellow-500 transition-colors" />
          ) : (
            <Moon className=" hover:text-white transition-colors" />
          )}
        </button>
        <button
          onClick={toggleNav}
          title={t('menu')}
          className=" flex gap-1 flex-col"
        >
          <motion.span
            animate={variant}
            variants={top}
            className="block w-10 h-1 bg-black rounded-lg dark:bg-white transition-colors"
          ></motion.span>
          <motion.span
            animate={variant}
            variants={center}
            className="block w-10 h-1 bg-black rounded-lg dark:bg-white transition-colors"
          ></motion.span>
          <motion.span
            animate={variant}
            variants={bottom}
            className="block w-10 h-1 bg-black rounded-lg dark:bg-white transition-colors"
          ></motion.span>
        </button>
      </div>
    </header>
  );
}

export default PageHeader;

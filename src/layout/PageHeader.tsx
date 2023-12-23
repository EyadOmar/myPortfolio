import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

function PageHeader() {
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
    setCurrLang(currLang === 'en' ? 'ar' : 'en');
  }

  return (
    <header className="sticky lg:h-44 h-36 max-w-7xl mx-auto top-0 px-5 lg:px-10 flex justify-between items-center">
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
          className="mx-5 lg:mx-7"
          title={t('theme')}
        >
          {isDark ? (
            <Sun className=" hover:text-yellow-500 transition-colors" />
          ) : (
            <Moon className=" hover:text-white transition-colors" />
          )}
        </button>
        <button
          title={t('menu')}
          className=" flex gap-1 flex-col hover:gap-2 hover:rotate-90 delay-100 transition-all"
        >
          <span className="block w-10 h-1 bg-black rounded-lg dark:bg-white transition-colors"></span>
          <span className="block w-10 h-1 bg-black rounded-lg dark:bg-white transition-colors"></span>
          <span className="block w-10 h-1 bg-black rounded-lg dark:bg-white transition-colors"></span>
        </button>
      </div>
    </header>
  );
}

export default PageHeader;

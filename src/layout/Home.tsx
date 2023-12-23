import { motion } from 'framer-motion';
import { useNavMenuContext } from '../contexts/NavMenuContext';
import { GalleryVerticalEnd, LucideIcon, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { isNavOpen } = useNavMenuContext();
  const { t } = useTranslation();
  const sectionVariant = {
    invisible: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <motion.section
      variants={sectionVariant}
      animate={isNavOpen ? 'invisible' : 'visible'}
      className=" font-bold px-10 pb-20 pt-5 lg:pt-32"
      layout
    >
      <article>
        <h1 className="text-5xl lg:text-7xl">{t('job')}</h1>
        <p className=" mt-10  text-xl lg:text-3xl">{t('slogan')}</p>
      </article>
      <div className="flex gap-4 mt-10 text-xl lg:text-2xl">
        <HomeButton Icon={GalleryVerticalEnd} title="projects" />
        <HomeButton Icon={User} title="contact" />
      </div>
    </motion.section>
  );
}

type HomeButtonProps = {
  Icon: LucideIcon;
  title: string;
};

function HomeButton({ Icon, title }: HomeButtonProps) {
  const { t } = useTranslation();
  return (
    <motion.button className=" flex gap-2 items-center border-2 border-black dark:border-white rounded-lg p-3 outline-none hover:text-bgk hover:bg-black dark:hover:text-black dark:hover:bg-bgk transition-colors duration-300">
      <Icon />
      {t(title)}
    </motion.button>
  );
}

export default Home;

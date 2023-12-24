import { motion } from 'framer-motion';
import { GalleryVerticalEnd, LucideIcon, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="font-bold px-10  w-screen flex flex-col h-screen justify-center"
    >
      <article>
        <h1 className="text-5xl lg:text-7xl">{t('job')}</h1>
        <p className=" mt-10  text-xl lg:text-3xl">{t('slogan')}</p>
      </article>
      <div className="flex gap-4 mt-10 text-xl lg:text-2xl">
        <HomeButton Icon={GalleryVerticalEnd} title="projects" />
        <HomeButton Icon={User} title="contact" />
      </div>
    </section>
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

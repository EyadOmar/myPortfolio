import { motion } from 'framer-motion';
import { useNavMenuContext } from '../contexts/NavMenuContext';
import { GalleryVerticalEnd, LucideIcon, User } from 'lucide-react';

function Home() {
  const { isNavOpen } = useNavMenuContext();
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
        <h1 className="text-5xl lg:text-7xl">Front-End Developer</h1>
        <p className=" mt-10  text-xl lg:text-3xl">
          Eyad Omar, web developer that aspires to design and build attractive
          modern websites.
        </p>
      </article>
      <div className="flex gap-4 mt-10 text-xl lg:text-2xl">
        <HomeButton Icon={GalleryVerticalEnd} title="Projects" />
        <HomeButton Icon={User} title="Contact" />
      </div>
    </motion.section>
  );
}

type HomeButtonProps = {
  Icon: LucideIcon;
  title: string;
};

function HomeButton({ Icon, title }: HomeButtonProps) {
  return (
    <motion.button className=" flex gap-2 items-center border-2 border-black dark:border-white rounded-lg p-3 outline-none hover:text-bgk hover:bg-black dark:hover:text-black dark:hover:bg-bgk transition-colors duration-300">
      <Icon />
      {title}
    </motion.button>
  );
}

export default Home;

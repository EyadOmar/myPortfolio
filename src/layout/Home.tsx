import { GalleryVerticalEnd, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

function Home() {
  const { t } = useTranslation();

  return (
    <section id="home">
      <div className="my-container font-bold h-screen flex flex-col md:items-center justify-center  lg:text-center">
        <article>
          <h1 className="text-5xl lg:text-7xl">{t('job')}</h1>
          <p className=" mt-10  text-xl lg:text-3xl">{t('slogan')}</p>
        </article>
        <div className="flex gap-4 mt-10 text-xl lg:text-2xl">
          <Button Icon={GalleryVerticalEnd} title="projects" link="#projects" />
          <Button Icon={User} title="contact" link="#" />
        </div>
      </div>
    </section>
  );
}

export default Home;

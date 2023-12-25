import { GalleryVerticalEnd, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

function Home() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="font-bold px-10  w-screen flex flex-col h-screen justify-center lg:items-center lg:text-center"
    >
      <article>
        <h1 className="text-5xl lg:text-7xl">{t('job')}</h1>
        <p className=" mt-10  text-xl lg:text-3xl">{t('slogan')}</p>
      </article>
      <div className="flex gap-4 mt-10 text-xl lg:text-2xl">
        <Button Icon={GalleryVerticalEnd} title="projects" />
        <Button Icon={User} title="contact" />
      </div>
    </section>
  );
}

export default Home;

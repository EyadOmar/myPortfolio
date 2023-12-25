import { Download } from 'lucide-react';
import Button from '../components/Button';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className=" grid gap-10 justify-center place-items-center grid-cols-1 lg:grid-cols-[2fr_1fr]"
    >
      <figure className="lg:order-last ">
        <img
          src="/myImage.JPG"
          alt="Eyad Omar image"
          className=" max-h-[600px] md:max-h-[800px] rounded-lg"
        />
      </figure>
      <article>
        <h2 className="font-bold pb-5 lg:pb-10 text-5xl lg:text-7xl">
          {t('name')}
        </h2>
        <p className="text-pretty text-sm lg:text-lg">{t('about-me')}</p>
        <a
          href="/cv.pdf"
          target="_blank"
          className="text-xl block w-fit mt-10 mx-auto lg:mx-0"
        >
          <Button Icon={Download} title="resume" />
        </a>
      </article>
    </section>
  );
}

export default About;

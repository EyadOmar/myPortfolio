import { Swiper, SwiperSlide } from 'swiper/react';
import projects from '../Data/projects';
import Button from '../components/Button';
import { Radio } from 'lucide-react';
import useMediaQuery from '../Hooks/useMediaQuery';
import { useTranslation } from 'react-i18next';

function Projects() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { t, i18n } = useTranslation();
  const isEng = i18n.language === 'en';

  return (
    <section id="projects" className="py-20 min-h-screen">
      <Swiper
        slidesPerView={isMobile ? 1 : 'auto'}
        spaceBetween={isMobile ? 0 : 50}
        centeredSlides={true}
        dir="ltr"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div
              dir={isEng ? 'ltr' : 'rtl'}
              className="flex flex-col items-center gap-5 lg:max-w-[60vw]  rounded-lg bg-white text-black select-none"
            >
              <img
                src={project.img}
                alt={isEng ? project.name : project.nameAr}
                className=" rounded-se rounded-ss "
              />
              <h2 className=" text-2xl font-bold">
                {isEng ? project.name : project.nameAr}
              </h2>
              <footer className="flex flex-col gap-4 md:flex-row  justify-between items-center flex-1 pb-6 w-full px-10">
                <div className="made-with flex gap-3 items-center">
                  <p>{t('made-with')} </p>
                  <div className="icons flex gap-2 items-center">
                    {project.madeWith.map((skill) => (
                      <img
                        key={`${project.id}_${skill.name}`}
                        src={skill.image}
                        alt={skill.name}
                        title={skill.name}
                        className=" w-6 md:w-9 border-black dark:text-white"
                      />
                    ))}
                  </div>
                </div>
                <Button
                  Icon={Radio}
                  title="live-website"
                  link={project.link}
                  blank
                />
              </footer>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Projects;

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import projects from '../Data/projects';

function Projects() {
  return (
    <section className="p-0 h-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={true}
        dir="ltr"
        className="w-screen"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.name}>
            <div className="project-card flex flex-col items-center gap-7 rounded-lg">
              <div className="cover">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full object-contain"
                />
              </div>
              <h2 className=" text-2xl">{project.name}</h2>
              <footer className="flex flex-col gap-4 md:flex-row  justify-between items-center flex-1 pb-6 w-full px-10">
                <div className="made-with  flex gap-3 items-center">
                  <p>Made With: </p>
                  <div className="icons flex gap-2 items-center">
                    {project.madeWith.map((icon) => (
                      <img
                        src={icon}
                        className=" w-6 md:w-9 border-black dark:text-white"
                      />
                    ))}
                  </div>
                </div>
                <LiveWebsiteButton link="/" />
              </footer>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function LiveWebsiteButton({ link }: { link: string }) {
  return (
    <button className="border-2 border-black dark:border-white rounded-lg p-3 outline-none hover:text-bgk hover:bg-black dark:hover:text-black dark:hover:bg-bgk transition-colors duration-300">
      <a href={link} target="_blank">
        Live Website
      </a>
    </button>
  );
}

export default Projects;

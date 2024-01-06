import { LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type HomeButtonProps = {
  Icon?: LucideIcon;
  title: string;
  link: string;
  blank?: boolean;
};

function Button({ Icon, title, link, blank }: HomeButtonProps) {
  const { t } = useTranslation();

  const clickHandler = () => {
    if (link.startsWith('#')) {
      const element = document.getElementById(link.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <button
      onClick={clickHandler}
      title={title}
      className=" flex gap-2 font-semibold items-center border-2 border-black dark:border-white rounded-lg p-3 outline-none hover:text-bgk hover:bg-black dark:hover:text-black dark:hover:bg-bgk transition-colors duration-300"
    >
      {Icon && <Icon />}
      {link.startsWith('#') ? (
        t(title)
      ) : (
        <a target={blank ? '_blank' : ''} href={link}>
          {t(title)}
        </a>
      )}
    </button>
  );
}

export default Button;

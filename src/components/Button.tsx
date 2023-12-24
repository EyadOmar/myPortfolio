import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type HomeButtonProps = {
  Icon: LucideIcon;
  title: string;
};

function Button({ Icon, title }: HomeButtonProps) {
  const { t } = useTranslation();
  return (
    <motion.button
      title={title}
      className=" flex gap-2 items-center border-2 border-black dark:border-white rounded-lg p-3 outline-none hover:text-bgk hover:bg-black dark:hover:text-black dark:hover:bg-bgk transition-colors duration-300"
    >
      <Icon />
      {t(title)}
    </motion.button>
  );
}

export default Button;

import { useTranslation } from 'next-i18next';
import { MouseEventHandler } from 'react';

import Close from '../../icons/Close';
import Menu from '../../icons/Menu';

type Props = {
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Hamburger = ({ isOpen, onClick }: Props) => {
  const { t } = useTranslation('documentation');
  const action = isOpen ? t('common.header.hamburger.open') : t('common.header.hamburger.close');

  return (
    <button onClick={onClick} aria-label={t('common.header.hamburger.label', { action })}>
      {isOpen ? <Close /> : <Menu />}
    </button>
  );
};

export default Hamburger;

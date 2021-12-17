import { MouseEventHandler } from 'react';

import Close from '../../icons/Close';
import Menu from '../../icons/Menu';

type Props = {
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Hamburger = ({ isOpen, onClick }: Props) => {
  const ariaLabel = `${isOpen ? 'Open' : 'Close'} menu`;

  return (
    <button onClick={onClick} aria-label={ariaLabel}>
      {isOpen ? <Close /> : <Menu />}
    </button>
  );
};

export default Hamburger;

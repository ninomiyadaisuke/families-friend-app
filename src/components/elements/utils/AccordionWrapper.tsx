import { FC, ReactNode, RefObject } from 'react';

import { useAccordion } from '@/hooks/useAccordion';
import styles from '@/styles/components/elements/utils/accordionWrapper.module.scss';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  accordionRef: RefObject<HTMLDivElement>;
};

const AccordionWrapper: FC<Props> = (props) => {
  const { children, isOpen, accordionRef } = props;

  return (
    <div className={styles.accordion} aria-hidden={!isOpen} ref={accordionRef}>
      <div>{children}</div>
    </div>
  );
};

export default AccordionWrapper;

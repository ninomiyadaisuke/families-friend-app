import { FC, ReactNode } from 'react';

import { useAccordion } from '@/hooks/useAccordion';
import styles from '@/styles/components/elements/utils/accordionWrapper.module.scss';

type Props = {
  children: ReactNode;
};

const AccordionWrapper: FC<Props> = (props) => {
  const { children } = props;
  const { isOpen, accordionRef } = useAccordion();
  return (
    <div className={styles.accordion} aria-hidden={!isOpen} ref={accordionRef}>
      <div>{children}</div>
    </div>
  );
};

export default AccordionWrapper;

import { motion } from 'framer-motion';
import { FC } from 'react';

import { ServiceCard } from '@/components/elements/cards';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import { serviceCardData } from '@/libs/animation/datas/serviceData';
import { homeServiceTitle } from '@/libs/animation/variants';
import styles from '@/styles/components/home/service.module.scss';

const HomeService: FC = () => {
  const { tablet } = useBreakPoint();
  return (
    <motion.section initial="initial" whileInView={'animate'} viewport={{ once: true }} className={styles.service}>
      {tablet && <h2>SERVICE</h2>}
      {!tablet && <motion.h2 variants={homeServiceTitle}>SERVICE</motion.h2>}
      <ul>
        {serviceCardData.map((data, i) => (
          <li key={i}>
            <ServiceCard cardData={data} />
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default HomeService;

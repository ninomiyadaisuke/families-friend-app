import Link from 'next/link';
import { FC } from 'react';

import { FixedImage } from '@/components/elements/images';
import styles from '@/styles/components/elements/footer/footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <ul className={styles.footer__links}>
          <li>
            <Link href={'/'}>このサイトについて</Link>
          </li>
          <li>
            <Link href={'/'}>利用規約</Link>
          </li>
          <li>
            <Link href={'/'}>プライバシーポリシー</Link>
          </li>
        </ul>
        <ul className={styles.footer__icons}>
          <li>
            <Link href={'/'}>
              <FixedImage src="/icon/facebook-icon.svg" alt="facebook-icon" className={styles.footer__icons_facebook} />
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              <FixedImage src="/icon/twitter-icon.svg" alt="twitter-icon" className={styles.footer__icons_twitter} />
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              <FixedImage
                src="/icon/instagram-icon.svg"
                alt="instagram-icon"
                className={styles.footer__icons_instagram}
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.footer__logoArea}>
        <FixedImage src="/logo/footer-logo.svg" alt="logo" className={styles.footer__logoArea_logo} />
        <small>&copy; families' friends 2023</small>
      </div>
    </footer>
  );
};

export default Footer;

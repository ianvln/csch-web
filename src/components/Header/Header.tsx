import ActionButton from '@components/ActionButton/ActionButton';
import React, { ReactElement } from 'react';
import styles from './Header.module.scss';

interface HeaderProps {
  title: string;
  text: string;
  actionText?: string;
}

const Header = (props: HeaderProps): ReactElement => {
  const { actionText, title, text } = props;
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{text}</p>
        {actionText && <ActionButton actionText={actionText} link="https://discord.gg/6EyEDKk" />}
      </div>
      <iframe
        className={styles.widget}
        src="https://discordapp.com/widget?id=334891772696330241&theme=dark"
        width="400"
        height="300"
        frameBorder="0"
        title="discord-widget"
      />
    </header>
  );
};

Header.defaultProps = {
  actionText: null
};

export default Header;

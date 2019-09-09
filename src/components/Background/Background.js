import React from 'react';
import styles from './Background.module.css'


const BackgroundImagePage = (props) => {
  return <div className={styles.bg}>
    {props.children}
    </div>;
};

export default BackgroundImagePage;
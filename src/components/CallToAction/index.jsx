import * as React from 'react';

import { Link as RouterLink } from 'react-router';

const styles = require("./CallToAction.css");

export const Container = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.innerContainer}>
    {children}
    </div>
  </div>
);



export const Link = ({ children, ...props }) => (
  <RouterLink className={styles.link} {...props} >
    {children}
  </RouterLink>
);

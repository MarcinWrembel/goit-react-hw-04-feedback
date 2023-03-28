import React from 'react';
import css from './Section.module.css';

const Section = ({ title, children }) => {

  return (
    <>
      <h1 className={css.sectionHeader}>{title}</h1>
      {children}
      <h2 className={css.sectionHeader}>Statistics</h2>
    </>
  );
};

export default Section;

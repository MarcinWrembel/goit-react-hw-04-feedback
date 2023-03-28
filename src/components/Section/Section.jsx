import { Component } from 'react';
import css from './Section.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <>
        <h1 className={css.sectionHeader}>{title}</h1>
        {children}
        <h2 className={css.sectionHeader}>Statistics</h2>
      </>
    );
  }
}

export default Section;

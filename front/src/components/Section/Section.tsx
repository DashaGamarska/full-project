import styles from './Section.module.css';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className, id }) => {
  return (
    <section
      className={`${styles.sectionContainer} ${className || ''}`}
      id={id}
    >
      {children}
    </section>
  );
};

Section.displayName = 'Section';

export default Section;

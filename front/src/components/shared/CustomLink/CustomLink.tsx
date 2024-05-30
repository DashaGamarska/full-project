import Link, { LinkProps } from 'next/link';

import styles from './CustomLink.module.scss';

interface CustomLinkProps extends LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
}

const CustomLink = ({
  href,
  className,
  children,
  variant,
  ...rest
}: CustomLinkProps) => {
  return (
    <Link
      href={href}
      className={`${styles.link} ${className || ''} ${styles[variant]}`}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default CustomLink;

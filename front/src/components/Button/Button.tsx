import { TbArrowRight } from 'react-icons/tb';
import clsx from 'clsx';

import styles from './Button.module.scss';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children?: React.ReactNode;
  variant: 'primary' | 'secondary' | 'tertiary' | 'dark' | 'light';
  hasIcon?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
}

const Button: React.FC<Props> = ({
  disabled,
  children,
  onClick,
  variant = 'primary',
  hasIcon,
  className,
  isLoading,
  ...rest
}) => {

  const buttonClass = clsx( styles.button, styles[variant], hasIcon ? styles.container : '', className || '' );


  return (
    <button
      onClick={onClick}
      disabled={disabled}
      {...rest}
      className={buttonClass}
    >
      {isLoading ? (
        <span className={styles.loader}></span>
      ) : (
        <span>{children}</span>
      )}
      {hasIcon && <TbArrowRight className={styles.icon} />}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;

import Image from 'next/image';
import React, {
  forwardRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import { FieldError } from 'react-hook-form/dist/types';

import flagImg from '../../../public/images/icons/flag-ukraine.svg';
import Typography from '../Typography/Typography';

import styles from './Input.module.scss';

type InputProps = {
  width?: string;
  height?: string;
  className?: string;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  type?: string;
  label?: string;
  error?: FieldError | undefined;
  errorMessage?: string;
  id?: string;
  multiline?: boolean;
  value?: string;
  isPhone?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

type InputRefType =
  | React.RefObject<HTMLInputElement>
  | React.RefObject<HTMLTextAreaElement>;

type InputAttributes = InputHTMLAttributes<HTMLInputElement>;
type TextareaAttributes = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Input = forwardRef<InputRefType, InputProps>((props, ref) => {
  const {
    width,
    height,
    className,
    label,
    error,
    errorMessage,
    id,
    multiline = false,
    value,
    isPhone,
    ...rest
  } = props;

  const inputClass = `${className || ''} ${styles.input} ${
    error && styles.errorInput
  } ${multiline && styles.textarea}`;

  const renderInput = () => {
    return isPhone ? (
      <div className={`${styles.phoneInput} ${error && styles.errorInput}`}>
        <div className={styles.phoneFlag}>
          <Image src={flagImg} alt="A Ukrainian flag" />
          <Typography variant="bodyRegular" color="var(--cl-gray-500)">
            +380
          </Typography>
        </div>
        <input
          id={id}
          style={{ width: width, height: height }}
          {...(rest as InputAttributes)}
          ref={ref as React.RefObject<HTMLInputElement>}
          aria-label={rest.placeholder || ''}
        />
      </div>
    ) : (
      <input
        id={id}
        style={{ width: width, height: height }}
        {...(rest as InputAttributes)}
        ref={ref as React.RefObject<HTMLInputElement>}
        className={inputClass}
        aria-label={rest.placeholder || ''}
      />
    );
  };

  return (
    <div>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      {multiline ? (
        <textarea
          id={id}
          style={{ width: width, height: height }}
          {...(rest as TextareaAttributes)}
          ref={ref as React.RefObject<HTMLTextAreaElement>}
          className={inputClass}
          aria-label={rest.placeholder || ''}
          value={value}
        />
      ) : (
        renderInput()
      )}
      {error && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;

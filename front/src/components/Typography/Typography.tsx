import styles from './Typography.module.scss';

// Defining the HTML tag that the component will support
const variantsMapping = {
  heading1: 'h1',
  heading2: 'h1',
  subheadingLight: 'h1',
  subheading1: 'h2',
  subheading2: 'h3',
  subheading3: 'h4',
  subheadingBold: 'h3',
  subheding4: 'p',
  button: 'span',
  bodyXL: 'p',
  bodyXLHeavy: 'p',
  bodyL: 'p',
  bodyL24: 'p',
  bodyLBold: 'h2',
  bodyRegular: 'p',
  bodyS: 'p',
  bodyS2: 'p',
  subheadingRegular: 'h4',
  exLargeBold: 'h3',
  bodyLarge: 'p',
  subheadingMobile: 'h4',
} as const;

interface Props {
  variant?: keyof typeof variantsMapping;
  color?: string;
  className?: string;
  children?: React.ReactNode;
  title?: string;
}

// Create a functional component that take
// variant: the selected html tag
// color: the selected color
// children: the node passed inside the Component
// className: own styles
// ...props: the default attribute of the Component
const Typography: React.FC<Props> = ({
  variant,
  color,
  children,
  className,
  title,
  ...props
}) => {
  // If the variant exists in variantsMapping, we use it.
  // Otherwise, use p tag instead.
  const Component = variant ? variantsMapping[variant] : 'p';

  const textClassName = `${
    variant ? styles[`typography--variant-${variant}`] : ''
  } ${className || ''}`;

  return (
    <Component
      className={textClassName}
      {...props}
      style={{ color }}
      title={title}
    >
      {children}
    </Component>
  );
};

Typography.displayName = 'Typography';

export default Typography;

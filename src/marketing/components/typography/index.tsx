import classNames from 'classnames';

type TypographyProps = {
  color?: 'primary' | 'body' | 'secondary';
  variant?: 'header' | 'desc';
  weight?:
  | 300
  | 400
  | 500
  | 600
  | 700
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold';
  // size?: number;
  className?: string;
  children?: React.ReactNode;
  [x: string]: any;
};

const defaultProps: TypographyProps = {
  color: 'primary',
  weight: 'normal',
  // size: 14
};

const Typography: React.FC<TypographyProps> = ({
  color,
  weight,
  variant,
  size,
  className,
  children,
  ...rest
}) => {
  const classes = classNames(
    { 'text-marketing-primary': color === 'primary' },
    { 'text-marketing-body': color === 'body' },
    { 'text-marketing-secondary': color === 'secondary' },

    { 'font-light': weight === 300 || weight === 'light' },
    { 'font-normal': weight === 400 || weight === 'normal' },
    { 'font-medium': weight === 500 || weight === 'medium' },
    { 'font-semibold': weight === 600 || weight === 'semibold' },
    { 'font-bold': weight === 700 || weight === 'bold' },

    { 'text-3xl leading-[37.5px] mb-4 lg:text-5xl lg:leading-[58px] lg:mb-6 text-center': variant === 'header' },
    { 'text-sm leading-6 lg:text-lg lg:leading-[30px]': variant === 'desc' },
  );

  return (
    <p
      style={{
        color: '',
      }}
      className={`${classes} ${className}`}
      {...rest}
    >
      {children}
    </p>
  );
};

Typography.defaultProps = defaultProps;

export default Typography;

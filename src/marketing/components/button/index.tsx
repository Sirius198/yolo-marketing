import classNames from 'classnames';

type ButtonProps = {
  size?: 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
  [x: string]: any;
};

const defaultProps: ButtonProps = {
  size: 'md',
  variant: 'primary',
};

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  children,
  ...rest
}) => {
  let classes = classNames(
    'border-2',
    'rounded-full',
    { 'px-6 py-3': size === 'md' },
    { 'px-8 py-6': size === 'lg' },
    { 'bg-[#0AC5B3] text-white border-[#0AC5B3]': variant === 'primary' },
    { 'bg-white text-[#0C4A6E] border-[#0C4A6E]': variant === 'secondary' }
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;

'use client';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'medium' | 'large';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
};

const VARIANT_PROPS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
};

const SIZE_PROPS = {
  medium: 'btn-md',
  large: 'btn-lg',
};

export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  variant,
  size,
  onClick,
  children,
  className,
  ...props
}) => (
  <button
    className={`btn ${VARIANT_PROPS[variant ?? 'primary']} ${SIZE_PROPS[size ?? 'medium']} ${className}`}
    onClick={onClick}
    {...props}
    type="button"
  >
    {children}
  </button>
);

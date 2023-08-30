import classNames from 'classnames';
import { Link } from 'react-router-dom';

export interface IButton {
  children: string | string[];
  variant: 'solid' | 'outlined' | 'text';
  to?: string;
  twclasses?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  variant,
  twclasses,
  to = '',
  onClick,
}: IButton) => {
  const defaultClasses = classNames('py-1 font-bold text-lg');
  const solidVariantClasses = classNames('px-8 rounded-full');
  const outlinedVariantClasses = classNames('px-8');
  const classes = classNames(
    defaultClasses,
    variant === 'solid' && solidVariantClasses,
    variant === 'outlined' && outlinedVariantClasses,
    twclasses,
  );

  let Component;

  if (to) {
    Component = Link;
  } else {
    Component = 'button';
  }

  return (
    <Component to={to} className={classes} onClick={onClick}>
      {children}
    </Component>
  );
};

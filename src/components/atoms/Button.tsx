import classNames from 'classnames';

interface IButton {
  children: string;
  variant: 'solid' | 'outlined' | 'text';
  twclasses?: string;
}

const Button = ({ children, variant, twclasses }: IButton) => {
  const defaultClasses = classNames('font-bold text-lg');
  const solidVariantClasses = classNames('py-2', 'px-6', 'rounded-full');
  const classes = classNames(
    defaultClasses,
    variant === 'solid' && solidVariantClasses,
    twclasses,
  );
  return <button className={classes}>{children}</button>;
};

export { Button };

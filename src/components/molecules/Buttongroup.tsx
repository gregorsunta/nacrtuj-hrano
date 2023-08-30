import classNames from 'classnames';

export interface IButtongroup {
  orientation: 'row' | 'column';
  variant: 'solid' | 'outlined';
  children: JSX.Element[];
  twclasses: string;
}

export const Buttongroup = ({
  children,
  twclasses,
  orientation,
  variant,
}: IButtongroup) => {
  const defaultClasses = classNames('flex');
  const variantClasses = classNames(
    variant === 'solid' && 'someClasses',
    variant === 'outlined' && 'someClasses',
  );
  const containerClasses = classNames(
    defaultClasses,
    variantClasses,
    orientation === 'row' && 'flex-row',
    orientation === 'column' && 'flex-col',
    twclasses,
  );

  return (
    <ul className={containerClasses}>
      {children.map((item) => (
        <li key={item.key}>{item}</li>
      ))}
    </ul>
  );
};

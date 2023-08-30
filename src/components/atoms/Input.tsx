import classNames from 'classnames';

interface IINput {
  id?: string | number;
  type: 'checkbox' | 'text';
  twclasses?: string;
  onChange?: () => void;
  placeholder?: string;
  readOnly?: boolean;
  checked?: boolean;
}

export const Input = ({
  id,
  placeholder,
  type,
  twclasses,
  onChange,
  readOnly,
  checked = false,
}: IINput) => {
  const containerClasses = classNames(twclasses);
  return (
    <input
      id={id}
      className={containerClasses}
      type={type}
      placeholder={placeholder}
      readOnly={readOnly}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      checked={checked}
    />
  );
};

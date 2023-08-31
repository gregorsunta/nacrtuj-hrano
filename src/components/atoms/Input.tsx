import classNames from 'classnames';

interface IINput {
  id?: string | undefined;
  type: 'checkbox' | 'text';
  twclasses?: string;
  onChange?: (value: string) => void;
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
        if (onChange) {
          onChange(e.target.value);
        }
      }}
      checked={checked}
    />
  );
};

import classNames from 'classnames';

interface IInput {
  id?: string | undefined;
  type: 'checkbox' | 'text';
  twclasses?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  checked: boolean;
  name?: string;
}

export const CheckboxLabel = ({
  id,
  name,
  type,
  twclasses,
  onChange,
  readOnly,
  checked = false,
}: IInput) => {
  const containerClasses = classNames(
    twclasses,
    'relative flex items-center gap-2',
  );
  const removeDefaultCheckMark = classNames('appearance-none');
  const customCheckMark = classNames(
    'w-3 h-3 border-2 rounded-xl hover:border-gray-900 active:border-gray-500',
    checked && 'border-darkOrange bg-darkOrange',
  );
  const label = classNames(
    'hover:font-semibold active:text-gray-500',
    checked && 'font-semibold',
  );
  return (
    <div className={`${containerClasses} `}>
      {/* <span className={`${customCheckMark}`}></span> */}
      <input
        id={id}
        className={`${removeDefaultCheckMark} ${customCheckMark}`}
        type={type}
        // placeholder={placeholder}
        readOnly={readOnly}
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.value);
          }
        }}
        checked={checked}
      />
      <label className={label} htmlFor={name}>
        {name}
      </label>
    </div>
  );
};

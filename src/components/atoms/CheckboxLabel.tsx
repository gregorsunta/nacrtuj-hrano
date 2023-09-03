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
  const containerClasses = classNames(twclasses, 'relative');
  const removeDefaultCheckMark = classNames('appearance-none');
  const customCheckMark = classNames(
    'w-5 h-5 border-2 rounded-md border-gray-400 hover:bg-green',
    checked && 'bg-darkGreen',
  );
  // const label = classNames('translate-x-16');
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
      <label className={''} htmlFor={name}>
        {name}
      </label>
    </div>
  );
};

import classNames from 'classnames';
import { Buttongroup } from './Buttongroup';
import { useState } from 'react';
import { Button } from '../atoms';
import { ReactComponent as DropArrow } from '../../assets/icons/down-arrow.svg';

export interface IDropdownFilter {
  orientation: 'row' | 'column';
  itemOrientation: 'row' | 'column';
  variant: 'solid' | 'outlined';
  children?: JSX.Element[];
  twclasses?: string;
  name: string;
}
export const DropdownFilter = ({
  twclasses,
  variant,
  children,
  itemOrientation,
  name,
}: IDropdownFilter) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const containerClasses = classNames(
    // 'relative',
    itemOrientation === 'row' && 'flex-row',
    itemOrientation === 'column' && 'flex-col',
    twclasses,
  );
  const listClasses = classNames();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex ${containerClasses}`}>
      <Button
        variant="text"
        twclasses="flex items-center justify-between"
        onClick={toggleOpen}
      >
        <p>{name}</p>
        <DropArrow
          width={'20px'}
          className={` transition-all duration-500 transform ${
            isOpen && 'rotate-180'
          }`}
        />
      </Button>
      <Buttongroup
        variant={variant}
        orientation={itemOrientation}
        twclasses={`transition-[max-height] duration-500 overflow-hidden ${
          isOpen ? 'max-h-[500px]' : 'max-h-[0px]'
        } ${listClasses}`}
      >
        {children}
      </Buttongroup>
    </div>
  );
};

import { useState } from 'react';
import classNames from 'classnames';
import { Dropdown } from '.';
import { IButton } from '../atoms/Button';
import { cloneElement } from 'react';

interface IShowcase {
  children: [JSX.Element, JSX.Element[]];
  expanded?: boolean;
  //   sets: (string | [string])[][];
}

export const DropdownFilter = ({ children, expanded }: IShowcase) => {
  const [mainButton, listButtons] = children;
  // const [activeType, setActiveType] = useState('');
  const activeButtonClasses = classNames('bg-darkOrange');

  const MainButtonProps = {
    ...(mainButton.props as IButton),
    // onClick: toggleType,
    twclasses: activeButtonClasses,
  };

  const MainButton = cloneElement(mainButton, MainButtonProps);

  return (
    <Dropdown orientation="column" itemOrientation="column" expanded={expanded}>
      {MainButton}
      <>{...listButtons}</>
    </Dropdown>
  );
};

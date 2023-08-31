import classNames from 'classnames';
import { Buttongroup } from './Buttongroup';

export interface IDropdown {
  orientation: 'row' | 'column';
  itemOrientation: 'row' | 'column';
  variant: 'solid' | 'outlined';
  children: JSX.Element[];
  twclasses?: string;
  expanded: boolean;
}
export const Dropdown = ({
  twclasses,
  variant,
  children,
  itemOrientation,
  expanded = false,
}: IDropdown) => {
  const [mainButton, ...listItems] = children; //the first button is always the list opener
  // const [isOpen, setIsOpen] = useState(false);
  const containerClasses = classNames(
    // 'relative',
    itemOrientation === 'row' && 'flex-row',
    itemOrientation === 'column' && 'flex-col',
    twclasses,
  );
  const listClasses = classNames();
  // 'absolute', 'top-full'

  // const toggleList = () => {
  //   console.log('click');
  //   setIsOpen(!isOpen);
  // };

  // const MainButtonProps = {
  //   ...(mainButton.props as IButton),
  //   onClick: onClick,
  // };

  // const MainButton = React.cloneElement(mainButton, MainButtonProps);

  return (
    <div className={`flex ${containerClasses}`}>
      {mainButton}
      <Buttongroup
        variant={variant}
        orientation={itemOrientation}
        twclasses={`${expanded ? 'inline-block' : 'hidden'} ${listClasses}`}
      >
        {listItems}
      </Buttongroup>
    </div>
  );
};

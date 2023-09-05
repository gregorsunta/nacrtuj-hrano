import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { Button } from '../atoms/Button';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
interface IHeader {
  twclasses?: string;
}

const Header = ({ twclasses }: IHeader) => {
  const classes = classNames(twclasses);
  return (
    <header
      className={`max-w-full py-4 flex align-end justify-between gap-4 ${classes}`}
    >
      <Link to="/">
        <div className="flex items-end gap-3">
          <Logo className="h-12 w-max" />
          <p className="text-3xl font-caveat font-bold whitespace-nowrap">
            <span className="text-darkGreen">Plan: </span>
            <span className="text-darkOrange">hrana</span>
          </p>
        </div>
      </Link>
      <div className="flex items-end gap-6">
        <Button variant="text" twclasses="hidden md:block text-darkGreen">
          <p>Kako deluje</p>
        </Button>

        <Button
          to="/search/1"
          variant="solid"
          twclasses="text-white bg-darkGreen inline"
        >
          <p>Iskalnik</p>
        </Button>
      </div>
    </header>
  );
};

export { Header };

import classNames from 'classnames';

interface IHeader {
  twclasses?: string;
}

const Footer = ({ twclasses }: IHeader) => {
  const classes = classNames(twclasses);
  return <div className={classes}></div>;
};

export { Footer };

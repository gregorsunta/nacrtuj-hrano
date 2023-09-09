import { Toast } from '../molecules';
import { IToast } from '../molecules/Toast';
import classNames from 'classnames';

interface IToastContainer {
  toasts: IToast[];
}

export const ToastContainer = ({ toasts }: IToastContainer) => {
  const container = classNames(
    'fixed right-20 bottom-10 flex flex-col justify-center items-center gap-5',
  );

  return (
    <div className={`${container}`}>
      {toasts.map(({ message, type, id }) => (
        <Toast key={id} id={id} message={message} type={type} />
      ))}
    </div>
  );
};

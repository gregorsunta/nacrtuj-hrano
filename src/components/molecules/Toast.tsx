import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { useRootStore } from '../../contexts/StoreContext';
import { Button } from '../atoms';
import { ReactComponent as Alert } from '../../assets/icons/alert-outline.svg';
import { ReactComponent as Close } from '../../assets/icons/close-outline.svg';

export interface IToast {
  id: string;
  message: string;
  type: 'warning' | 'error' | 'success' | 'info';
}

const types = {
  warning: {
    icon: <Alert className="w-5 h-5" />,
    classes: '',
  },
  error: {
    icon: '',
    classes: '',
  },
  success: {
    icon: '',
    classes: '',
  },
  info: {
    icon: '',
    classes: '',
  },
};

export const Toast = ({ id, type, message }: IToast) => {
  const { classes } = types[type];
  const progressBarRef = useRef<HTMLDivElement>(null);
  const { notificationStore } = useRootStore();
  const timer = useRef<NodeJS.Timeout>();

  const container = classNames(
    'py-3 px-5 flex flex-col justify-center items-center drop-shadow bg-white rounded-md ',
    classes,
  );

  const contentContainer = classNames('flex items-center');
  const progressbar = classNames(
    'h-full bg-yellow-500 transition-all ease-linear duration-[5000ms] w-0',
  );
  const iconContainer = classNames('w-5 h-5');

  const handleDismiss = () => {
    notificationStore.removeToast(id);
  };

  useEffect(() => {
    (function () {
      requestAnimationFrame(() => {
        if (progressBarRef.current) {
          progressBarRef.current.style.width = '100%';
        }
      });
      timer.current = setTimeout(() => {
        handleDismiss();
        console.log('I timed out');
      }, 5200);

      return () => {
        // clearTimeout(timer.current);
      };
    })();
  }, []);

  return (
    <div
      className={`${container}`}
      onMouseEnter={() => {
        clearTimeout(timer.current);
      }}
      onMouseOver={() => {
        clearTimeout(timer.current);
      }}
    >
      <div className={contentContainer}>
        <p>{message}</p>
        <Button variant="icon" onClick={handleDismiss}>
          <Close className={iconContainer} />
        </Button>
      </div>
      <div className="h-1 w-full bg-gray-300">
        <div
          className={progressbar}
          ref={progressBarRef}
          id="progressBar"
        ></div>
      </div>
    </div>
  );
};

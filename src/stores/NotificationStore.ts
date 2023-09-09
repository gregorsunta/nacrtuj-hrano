import { makeAutoObservable, toJS } from 'mobx';
import { IToast } from '../components/molecules/Toast';
import { IRootStore } from './RootStore';
import { v4 as uuidv4 } from 'uuid';

export interface INotificationStore {
  rootStore: IRootStore;
  toasts: IToast[];
  addToast: (toast: IToast) => void;
  removeToast: (id: string) => void;
  toastWarning: (message: string) => void;
  toastError: (message: string) => void;
  toastInfo: (message: string) => void;
  toastSuccess: (message: string) => void;
}

export class NotificationStore implements INotificationStore {
  constructor(rootStore: IRootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }
  private _toasts: IToast[] = [];
  rootStore: IRootStore;

  public get toasts() {
    return toJS(this._toasts);
  }

  addToast = (toast: IToast) => {
    this._toasts.push(toast);
  };

  removeToast = (id: string) => {
    const leftover = this.toasts.filter((toast) => toast.id !== id);
    this._toasts = leftover;
  };

  toastError = (message: string) => {
    this.addToast({ type: 'error', message: message, id: uuidv4() });
  };

  toastWarning = (message: string) => {
    this.addToast({ type: 'warning', message: message, id: uuidv4() });
  };

  toastSuccess = (message: string) => {
    this.addToast({ type: 'success', message: message, id: uuidv4() });
  };

  toastInfo = (message: string) => {
    this.addToast({ type: 'info', message: message, id: uuidv4() });
  };
}

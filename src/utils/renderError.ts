import { ToastMessage } from '@/hooks/toast';

interface IErrors {
  err: {
    response: {
      message: string;
    };
  };
  addToast: (message: Omit<ToastMessage, 'id'>) => void;
  defaultError: string;
  screen?: 'auth' | string;
}

export default function renderError({
  err,
  addToast,
  defaultError,
}: IErrors): void {
  if (err?.response?.message) {
    const { message } = err.response;

    return addToast({
      type: 'error',
      title: 'Erro',
      description: message,
    });
  }

  return addToast({
    type: 'error',
    title: 'Erro!',
    description: defaultError,
  });
}

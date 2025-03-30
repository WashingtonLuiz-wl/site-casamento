import React, { useEffect } from 'react';
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaTimes,
} from 'react-icons/fa';

import { ToastMessage, useToast } from '@/hooks/toast';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <FaInfoCircle size={20} />,
  error: <FaExclamationCircle size={20} />,
  success: <FaCheckCircle size={20} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container
      $hasDescription={!!message.description}
      type={message.type}
      style={style}
    >
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FaTimes size={16} />
      </button>
    </Container>
  );
};

export default Toast;

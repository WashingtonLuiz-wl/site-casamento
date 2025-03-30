import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  InputHTMLAttributes,
} from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { useField } from '@unform/core';

import { Container, Error } from '../styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  typeVariation?: 'primary' | 'secundary' | 'ternary';
  width?: number;
  children?: React.ReactNode;
}

const Input: React.FC<IInputProps> = ({
  name,
  typeVariation,
  label,
  style,
  children,
  width,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      isFocused={isFocused}
      isFilled={isFilled}
      isErrored={!!error}
      style={style}
      // typeVariation={typeVariation}
      className="input"
      width={width}
    >
      <div className="Content">
        {label && <label htmlFor={name}>{label}</label>}
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
        {children}
      </div>

      <Error title={error} className="content-error">
        <FiAlertCircle color="#c53030" size={20} />
      </Error>
    </Container>
  );
};

export default Input;

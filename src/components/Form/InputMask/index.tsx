import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';

import { useField } from '@unform/core';

import { Container, Error } from '../styles';

export interface IInputMaskProps extends InputProps {
  id?: string;
  name: string;
  placeholder?: string;
  label?: string;
  width?: number;
  typeVariation?: 'primary' | 'secundary' | 'ternary';

  getValue?(v: string): void;
}

const InputMask: React.FC<IInputMaskProps> = ({
  name,
  label,
  width,
  typeVariation,
  getValue,

  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement | any>(null);

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

  const [valueState, setValue] = useState(defaultValue || '');

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      // path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
      getValue: ref => {
        if (valueState) return valueState;
        if (ref?.current?.value) return ref.current.value;
        return '';
      },
    });
  }, [fieldName, registerField, valueState]);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <Container
      isFocused={isFocused}
      isFilled={isFilled}
      isErrored={!!error}
      // typeVariation={typeVariation}
      width={width}
    >
      <div className="Content">
        {label && <label htmlFor={name}>{label}</label>}
        <ReactInputMask
          value={valueState}
          onChange={e => {
            setValue(e.target.value.replace(/[^\d]/g, ''));
            if (getValue) getValue(e.target.value.replace(/[^\d]/g, ''));
          }}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
      </div>

      <Error title={error} className="content-error">
        <FiAlertCircle color="#c53030" size={20} />
      </Error>
    </Container>
  );
};

export default InputMask;

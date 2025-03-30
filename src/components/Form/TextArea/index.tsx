import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  TextareaHTMLAttributes,
} from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { useField } from '@unform/core';

import { Container, Error } from '../styles';
import { TextAreaContainer } from './styles';

export interface ITextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  typeVariation?: 'primary' | 'secundary' | 'ternary';
  minHeight?: number;
}

const TextArea: React.FC<ITextAreaProps> = ({
  name,
  label,
  style,
  minHeight,
  typeVariation,
  ...rest
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

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

  const [dynamicHeight, setDynamicHeight] = useState(minHeight);

  const adjustTextareaHeight = () => {
    const textarea = inputRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto';
    textarea.style.height = `${textarea?.scrollHeight}px`;
    setDynamicHeight(textarea.scrollHeight);
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [defaultValue]);

  return (
    <TextAreaContainer minHeight={dynamicHeight}>
      <Container
        isFocused={isFocused}
        isFilled={isFilled}
        isErrored={!!error}
        style={style}
        // typeVariation={typeVariation}
      >
        <div className="Content">
          {label && <label htmlFor={name}>{label}</label>}
          <textarea
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            defaultValue={defaultValue}
            ref={inputRef}
            onInput={adjustTextareaHeight}
            {...rest}
          />
        </div>

        <Error title={error} className="content-error">
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      </Container>
    </TextAreaContainer>
  );
};

export default TextArea;

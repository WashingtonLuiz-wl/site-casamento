import React, { useRef, useEffect, useMemo, useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import ReactSelect, { components } from 'react-select';
import { useSpring } from 'react-spring';

import { useField } from '@unform/core';

import { Container } from './styles';

export interface IOptions {
  id: string | number;
  value: string;
  label: string;
}

export interface ISelectProps {
  // export interface ISelectProps extends SelectProps<OptionTypeBase> {
  name: string;
  label: string;
  isMulti?: any;
  textNoOptions?: string;
  onChange?: any;
  placeholder?: string;
  options: IOptions[];
  width?: number;
}

const NoOptionsMessage = (textNoOptions, props) => {
  return (
    <components.NoOptionsMessage {...props}>
      <span className="custom-css-class">{textNoOptions}</span>
    </components.NoOptionsMessage>
  );
};

const Select: React.FC<ISelectProps> = ({
  name,
  isMulti,
  options,
  label,
  textNoOptions,
  width,
  ...rest
}) => {
  const selectRef = useRef<any | null>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [defaultValueFormated, setDefaultValueFormated] = useState<IOptions>();

  useEffect(() => {
    if (!defaultValue) {
      return;
    }

    const findOptionSelected = options.find(
      option => option.value === defaultValue,
    );

    if (findOptionSelected && selectRef?.current) {
      selectRef?.current?.setValue(findOptionSelected);
    }

    setDefaultValueFormated(findOptionSelected);
  }, [defaultValue, options]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (isMulti) {
          if (!ref.state.selectValue) {
            return [];
          }
          return ref.state.selectValue.map((option: any) => option.value);
        }

        if (!ref.state.selectValue) {
          return undefined;
        }

        if (!ref.state.selectValue[0]) {
          return undefined;
        }

        return ref.state.selectValue[0].value;
      },
      clearValue: (ref: any) => {
        ref.select.clearValue();
      },
      setValue: (ref: any, value: any) => {
        ref.setValue(value);
      },
    });
  }, [fieldName, registerField, isMulti]);

  return (
    <Container isErrored={!!error} width={width || undefined}>
      <div className="Content">
        <label htmlFor={name}>{label}</label>

        <ReactSelect
          // value={formattedDefaultValue}
          // onChange={e => {
          //   handleValueChange(e);
          // }}
          ref={selectRef}
          defaultValue={defaultValueFormated}
          noOptionsMessage={() => textNoOptions}
          isMulti={isMulti}
          options={options}
          classNamePrefix="react-select"
          id="long-value-select"
          instanceId="long-value-select"
          inputId="long-value-select"
          {...rest}
          theme={theme => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: '#C5C3C6', // holver
              primary: '#0f355d', // Item Selecionado

              primary75: '#0f355d',
              primary50: '#0F355D',
              neutral0: '#fff',
            },
          })}
          {...rest}
        />
      </div>
    </Container>
  );
};

export default Select;

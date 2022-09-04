import { useRef, useEffect } from 'react';
import ReactSelect, {
  Props as SelectProps,
} from 'react-select';
import { useField } from '@unform/core';
import { ErrorMessage } from './styles';

interface Props extends SelectProps<any> {
  name: string;
  label?: string
}

function SelectForm({ name, label, ...rest }: Props) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.selectValue) {
            return [];
          }
          return ref.state.selectValue.map((option: any) => option.value);
        }
        if (ref.state.selectValue.length == 0) {
          return '';
        }
        return ref.state.selectValue[0].value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <div>
      <label htmlFor={fieldName}>{label}</label>
      <ReactSelect
        defaultValue={defaultValue}
        placeholder="Selecione"
        ref={selectRef}
        classNamePrefix="react-select"
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#CAC9C9',
          },
        })}
        styles={{
          input: (provided) => ({
            ...provided,
            height: '35px',
          }),
        }}
        {...rest}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>

  );
};

export default SelectForm
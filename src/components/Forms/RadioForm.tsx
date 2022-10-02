import { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import {
  ErrorMessage,
  RadioButton
} from './styles'

interface Props {
  name: string
  label?: string
  options: Array<{
    id: string
    value: string
    label: string
    text: string
  }>
}

type InputProps = JSX.IntrinsicElements["input"] & Props;

const RadioForm = ({ name, label, options, ...rest }: InputProps) => {
  const inputRefs = useRef<HTMLInputElement[] | any>([]);
  const { fieldName, registerField, defaultValue, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue(refs) {
        const checked = refs.find((ref: any) => ref.checked);

        return checked ? checked.value : null;
      },
      setValue(refs, value) {
        const item = refs.find((ref: any) => ref.value === value);

        if (item) {
          item.checked = true;
        }
      }
    });

  }, [fieldName, registerField]);

  return (
    <RadioButton>
      {label && <p>{label}</p>}

      {options.map((option, index) => (
        <span key={option.id}>
          <div className="box">
            <input
              type="radio"
              ref={ref => {
                inputRefs.current[index] = ref
              }}
              id={option.id}
              name={name}
              defaultChecked={defaultValue?.includes(option.id)}
              value={option.value}
              {...rest}
            />
            <div key={option.id} className="option" >
              <label htmlFor={option.id}>
                {option.label}
              </label>
              <span >
                {option.text}
              </span>
            </div>
          </div>
        </span>
      ))}

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </RadioButton>
  );
};

export default RadioForm;
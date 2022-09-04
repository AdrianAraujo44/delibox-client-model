import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { IoBicycle, IoWalk } from "react-icons/io5";

import {
  Options
} from './styles'

interface Props {
  name: string;
  setSearchCep: any
}

type InputProps = JSX.IntrinsicElements["input"] & Props;

const DeliveryOption: React.FC<InputProps> = ({ name, setSearchCep }) => {
  const inputRefs = useRef<HTMLInputElement[] | any>([]);
  const { fieldName, registerField, defaultValue } = useField(name);

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
    <Options>
      <h3>Como quer receber seu pedido ?</h3>
      <div className="optionItem">
        <div className='box'>
          <IoBicycle size={32} />
          <div className='optionText'>
            <strong>Entrega</strong>
            <span>A gente leva até você</span>
          </div>
        </div>
        <input
          ref={elRef => (inputRefs.current[1] = elRef)}
          type="radio"
          name={fieldName}
          value={"entrega"}
          /* defaultChecked={defaultValue == 'entrega'} */
          defaultChecked={true}
          onClick={() => setSearchCep(true)}
        />
      </div>

      <div className="optionItem">
        <div className='box'>
          <IoWalk size={32} />
          <div className='optionText'>
            <strong>Retirada</strong>
            <span>Você retira seu pedido no local</span>
          </div>
        </div>
        <input
          ref={elRef => (inputRefs.current[0] = elRef)}
          type="radio"
          name={fieldName}
          value={"retirada"}
          onClick={() => setSearchCep(false)}

          /* defaultChecked={defaultValue == 'retirada'} */
        />
      </div>
    </Options>
  );
};

export default  DeliveryOption;
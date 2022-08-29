import { useRef, useEffect, InputHTMLAttributes } from 'react'
import { useField } from '@unform/core'
import { InputText, ErrorMessage } from './styles'

interface Props {
  name: string
  type?:
    | 'text'
    | 'number'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'hidden'
    | 'month'
    | 'password'
    | 'time'
    | 'range'
    | 'search'
    | 'tel'
    | 'url'
    | 'week'
  label?: string
  value?: string
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props

function InputForm({ name, type, label, value, ...rest }: InputProps) {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const defaultInputValue = value || defaultValue

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, newValue) => {
        ref.current.value = newValue
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <InputText>
      <label htmlFor={fieldName}>{label}</label>
      <input
        type={type || 'text'}
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultInputValue}
        {...rest}
      />

     {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputText>
  )
}

export default InputForm
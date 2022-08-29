import { useCallback } from "react"
import { useState } from "react"
import { ValidationError } from 'yup';

export const useValidateForm = ({ formRef, schema, onSuccess }: any) => {
  const [validating, setValidating] = useState(false)
  const success = useCallback(onSuccess, [onSuccess])

  const handleSubmit = useCallback(
    async (data: any) => {
      formRef.current?.setErrors({})
      try {
        setValidating(true)
        const _data = await schema.validate(data, { abortEarly: false })
        success(_data)
      } catch (err) {
        const validationErrors = {} as any
        if (err instanceof ValidationError) {
          err.inner.forEach((error) => {
            validationErrors[error.path!] = error.message
          })
          formRef.current?.setErrors(validationErrors)
        }
      } finally {
        setValidating(false)
      }
    }, [formRef, schema, success]
  )

  return {
    handleSubmit,
    validating
  }
}
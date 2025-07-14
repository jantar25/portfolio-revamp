interface ValidationErrorsProps {
  id: string
  value: string
  fieldName: string
  setValidationErrors: (
    errors: (prevErrors: Record<string, string>) => Record<string, string>,
  ) => void
}

export const validateName = ({
  id,
  value,
  fieldName,
  setValidationErrors,
}: ValidationErrorsProps): boolean => {
  if (!value) {
    setValidationErrors((errors: Record<string, string>) => ({
      ...errors,
      [`${fieldName}_${id}`]: `${fieldName} cannot be empty.`,
    }))
    return true
  }

  const nameRegex = /^[a-zA-Z0-9\s.'-]*$/
  if (!nameRegex.test(value)) {
    setValidationErrors((errors: Record<string, string>) => ({
      ...errors,
      [`${fieldName}_${id}`]: `${fieldName} cannot contain any special character.`,
    }))
    return true
  }

  if (value.length < 2) {
    setValidationErrors((errors) => ({
      ...errors,
      [`${fieldName}_${id}`]: `${fieldName} must be at least 2 characters long`,
    }))
    return true
  }

  setValidationErrors((errors: Record<string, string>) => ({
    ...errors,
    [`${fieldName}_${id}`]: '',
  }))
  return true
}

export const validateEmail = ({
  id,
  value,
  fieldName,
  setValidationErrors,
}: ValidationErrorsProps): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (!value) {
    setValidationErrors((errors) => ({
      ...errors,
      [`${fieldName}_${id}`]: `${fieldName} cannot be empty.`,
    }))
  } else if (!emailRegex.test(value)) {
    setValidationErrors((errors) => ({
      ...errors,
      [`${fieldName}_${id}`]: 'Invalid email format.',
    }))
  } else {
    setValidationErrors((errors) => ({
      ...errors,
      [`${fieldName}_${id}`]: '',
    }))
  }

  return true
}
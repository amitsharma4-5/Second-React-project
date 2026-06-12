import { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET':    return { ...state, values: { ...state.values, [action.field]: action.value }, errors: { ...state.errors, [action.field]: '' } }
    case 'ERROR':  return { ...state, errors: { ...state.errors, [action.field]: action.message } }
    case 'ERRORS': return { ...state, errors: action.errors }
    case 'RESET':  return { values: action.initial, errors: {} }
    default:       return state
  }
}

export function useForm(initialValues = {}, validate) {
  const [state, dispatch] = useReducer(reducer, { values: initialValues, errors: {} })

  const handleChange = (field) => (e) =>
    dispatch({ type: 'SET', field, value: e.target.value })

  const setField = (field, value) =>
    dispatch({ type: 'SET', field, value })

  const reset = () => dispatch({ type: 'RESET', initial: initialValues })

  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault()
    if (validate) {
      const errors = validate(state.values)
      if (Object.keys(errors).length > 0) {
        dispatch({ type: 'ERRORS', errors })
        return
      }
    }
    onSubmit(state.values)
  }

  return {
    values: state.values,
    errors: state.errors,
    handleChange,
    setField,
    reset,
    handleSubmit,
  }
}

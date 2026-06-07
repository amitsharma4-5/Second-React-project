export const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export const isRequired = (value) => value.trim().length > 0

export const minLength = (value, min) => value.trim().length >= min

export const maxLength = (value, max) => value.trim().length <= max

export const isNumeric = (value) => /^\d+$/.test(value)

export const isURL = (value) => {
  try { new URL(value); return true }
  catch { return false }
}

export const isStrongPassword = (value) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(value)

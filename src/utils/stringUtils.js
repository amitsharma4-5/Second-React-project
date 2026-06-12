export const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

export const titleCase = (str) =>
  str.split(' ').map(capitalize).join(' ')

export const camelToKebab = (str) =>
  str.replace(/([A-Z])/g, '-$1').toLowerCase()

export const kebabToCamel = (str) =>
  str.replace(/-([a-z])/g, (_, c) => c.toUpperCase())

export const truncate = (str, max = 50, suffix = '...') =>
  str.length > max ? str.slice(0, max) + suffix : str

export const slugify = (str) =>
  str.toLowerCase().trim().replace(/[\s_]+/g, '-').replace(/[^\w-]/g, '')

export const countWords = (str) =>
  str.trim().split(/\s+/).filter(Boolean).length

export const reverseWords = (str) =>
  str.trim().split(/\s+/).reverse().join(' ')

export const isPalindrome = (str) => {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  return clean === clean.split('').reverse().join('')
}

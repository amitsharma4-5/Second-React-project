export const unique = (arr) => [...new Set(arr)]

export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const group = item[key]
    acc[group] = acc[group] ? [...acc[group], item] : [item]
    return acc
  }, {})

export const sortBy = (arr, key, dir = 'asc') =>
  [...arr].sort((a, b) => {
    if (a[key] < b[key]) return dir === 'asc' ? -1 : 1
    if (a[key] > b[key]) return dir === 'asc' ? 1 : -1
    return 0
  })

export const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  )

export const flatten = (arr) => arr.flat(Infinity)

export const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5)

export const countBy = (arr, key) =>
  arr.reduce((acc, item) => {
    acc[item[key]] = (acc[item[key]] ?? 0) + 1
    return acc
  }, {})

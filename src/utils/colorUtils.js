export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : null
}

export const rgbToHex = (r, g, b) =>
  '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')

export const lighten = (hex, amount = 0.2) => {
  const { r, g, b } = hexToRgb(hex) ?? { r: 0, g: 0, b: 0 }
  return rgbToHex(
    Math.min(255, Math.round(r + (255 - r) * amount)),
    Math.min(255, Math.round(g + (255 - g) * amount)),
    Math.min(255, Math.round(b + (255 - b) * amount)),
  )
}

export const darken = (hex, amount = 0.2) => {
  const { r, g, b } = hexToRgb(hex) ?? { r: 0, g: 0, b: 0 }
  return rgbToHex(
    Math.max(0, Math.round(r * (1 - amount))),
    Math.max(0, Math.round(g * (1 - amount))),
    Math.max(0, Math.round(b * (1 - amount))),
  )
}

export const toRgba = (hex, alpha = 1) => {
  const { r, g, b } = hexToRgb(hex) ?? { r: 0, g: 0, b: 0 }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

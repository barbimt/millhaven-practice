export const normalizeColor = (value: string, fallback = '#7A67BE'): string => {
  const trimmed = value.trim()
  if (!trimmed) return fallback

  if (
    trimmed.startsWith('#')
    || trimmed.startsWith('rgb')
    || trimmed.startsWith('hsl')
    || trimmed.startsWith('oklch')
    || trimmed.startsWith('var(')
  ) {
    return trimmed
  }

  if (/^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$/.test(trimmed)) {
    return `#${trimmed}`
  }

  return trimmed
}

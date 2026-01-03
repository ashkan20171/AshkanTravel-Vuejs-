export const formatPrice = (value, locale) => {
  const n = Number(value) || 0
  if (locale === 'fa') return `${n.toLocaleString('fa-IR')} تومان`

  // demo conversion
  const usd = Math.max(1, Math.round(n / 60000))
  return `$${usd.toLocaleString('en-US')}`
}

export const getText = (item, key, locale) => {
  return locale === 'fa' ? item[`${key}_fa`] : item[`${key}_en`]
}

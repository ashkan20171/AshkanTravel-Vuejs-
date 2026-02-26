const KEY = 'ashkantravel_theme'

export const getInitialTheme = () => {
  const saved = localStorage.getItem(KEY)
  if (saved === 'light' || saved === 'dark') return saved

  // Default: follow OS preference
  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light'
}

export const applyTheme = (theme) => {
  const t = theme === 'dark' ? 'dark' : 'light'
  document.documentElement.dataset.theme = t
  localStorage.setItem(KEY, t)
  return t
}

export const toggleTheme = () => {
  const current = document.documentElement.dataset.theme || 'light'
  return applyTheme(current === 'dark' ? 'light' : 'dark')
}

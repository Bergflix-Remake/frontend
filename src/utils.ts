export function preloadImage (url: string) {
  new Image().src = url
}
export function getYearFromDate (date: string) {
  const d = new Date(date)
  return d.getFullYear()
}

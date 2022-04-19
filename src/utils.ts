export function preloadImage(url: string) {
  var img = new Image();
  img.src = url;
}
export function getYearFromDate(date: string) {
  return date.split("-")[0];
}
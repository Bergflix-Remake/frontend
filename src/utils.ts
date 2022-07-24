export function preloadImage(url: string) {
  new Image().src = url;
}
export function getYearFromDate(date: string) {
  const d = new Date(date);
  return d.getFullYear();
}

export function getColorLuma(color: string) {
  const rgb = hexToRgb(color);
  console.debug(rgb);
  return rgb ? 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b : null;
}

export function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

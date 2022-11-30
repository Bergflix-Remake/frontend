export const api = (path: string | undefined, fallback?: string) => path ? `https://api.bergflix.de/${path.replace(/^\//, '')}` : fallback || '';
export const cdn = (path: string | undefined, fallback?: string) => path ? `https://cdn.bergflix.de/${path.replace(/^\//, '')}` : fallback || '';

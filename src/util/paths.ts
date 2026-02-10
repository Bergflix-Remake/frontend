import md5 from 'crypto-js/md5';

export const api = (path: string | undefined, fallback?: string) =>
  path ? `https://api.bergflix.de/${path.replace(/^\//, '')}` : fallback || '';
export const cdn = (path: string | undefined, fallback?: string) =>
  path ? `https://cdn.bergflix.de/${path.replace(/^\//, '')}` : fallback || '';
export const gravatar = (
  email: string = 'user@bergflix.de',
  opts: { size: number; default: string } = {
    size: 500,
    default: 'https://cdn.bergflix.de/logo/light_bg.png',
  },
) =>
  `https://www.gravatar.com/avatar/${md5(email.trim().toLowerCase())}?size=${opts.size}&d=${opts.default}`;

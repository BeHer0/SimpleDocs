import * as path from 'path';

export function getAvailablePath(src) {
  return process.env.NODE_ENV != 'production'
    ? src
    : path.join('/nextra-template', src)
}

export function setWebsiteIcon(document) {
  const url = getAvailablePath("/favicon.png");
  const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = url;
  document.getElementsByTagName('head')[0].appendChild(link);
}
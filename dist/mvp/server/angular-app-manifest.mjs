
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-JRSVGEXM.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10090, hash: '0af550e7ad9c7688fc7f59a21cd31d9d60db5edcbb578efc6192e3b409d3c9fa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 10104, hash: '32c4d68d0552ae4a013faec5eee81e8888a8ed101ec7321e4b9906848d85a844', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 73816, hash: '3e9cb3503118a0a730bc85712c10353b52a7f4e98f176327fe3de64ec7b14528', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IPG7MHFD.css': {size: 859, hash: 'SEQrn419k6Y', text: () => import('./assets-chunks/styles-IPG7MHFD_css.mjs').then(m => m.default)}
  },
};

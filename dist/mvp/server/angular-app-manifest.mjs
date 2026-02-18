
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-SZ5LAJMC.js"
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
    'index.csr.html': {size: 10090, hash: '2cd180e726dd4620300de818a8cdd747b1c902df15d09b445902f2679cb50023', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 10104, hash: 'ec55420a269f28eba7022180533fbd00aaae7eba1e9a1b250369d63b3b5a73bf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 97040, hash: '0436cf3b038a19cffd730201ee6ba4fc521f40cabc735999c34b8a52ec003399', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IPG7MHFD.css': {size: 859, hash: 'SEQrn419k6Y', text: () => import('./assets-chunks/styles-IPG7MHFD_css.mjs').then(m => m.default)}
  },
};

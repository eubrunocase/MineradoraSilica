
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-6HXP5GWY.js"
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
    'index.csr.html': {size: 10090, hash: '263eaecdd2290871b90eeb38443590d602dce4333806052ec15eef1d9429a91d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 10104, hash: 'd59bb44016d32f611829a279a7fd76234d21528543809edf791d470bba869621', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 101695, hash: '5df0d3c63cc9a712a51f7a3a2deb23e9ce060835c0c7c799d6b7e21f1b212423', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IPG7MHFD.css': {size: 859, hash: 'SEQrn419k6Y', text: () => import('./assets-chunks/styles-IPG7MHFD_css.mjs').then(m => m.default)}
  },
};


export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-NAHNF5ZC.js"
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
    'index.csr.html': {size: 10090, hash: '4c981aa80220897521a47587fec57946ee6e5cbde33a13a96b306d45bf42f7a3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 10104, hash: '86bc5b031e5745111542dc4cfb264260c85f437277a720b0aef517941bb35f65', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 89319, hash: '376ccb2f5505a388e101eb3fd62c2bb485ae965fc97c477481a12843254f7006', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IPG7MHFD.css': {size: 859, hash: 'SEQrn419k6Y', text: () => import('./assets-chunks/styles-IPG7MHFD_css.mjs').then(m => m.default)}
  },
};

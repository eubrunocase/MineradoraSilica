
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-2Z4SQHVQ.js"
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
    'index.csr.html': {size: 10090, hash: '88d073a9f1a6d0d835628e2291f6c614d204fb1f67cd2ed89d9e14012e744376', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 10104, hash: 'b6da2ced0dced6fad86cf92b5ab02e61419262e25c3b7616169ebb3f8e599e5f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 73867, hash: '3bea673627fcb543e1a897a6c7ba07175f58b525b94a61d79093bd9fedadc57a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IPG7MHFD.css': {size: 859, hash: 'SEQrn419k6Y', text: () => import('./assets-chunks/styles-IPG7MHFD_css.mjs').then(m => m.default)}
  },
};

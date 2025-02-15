import { defineEventHandler } from 'file:///workspace/KubeCamp/node_modules/h3/dist/index.mjs';
import { u as useAppConfig } from './nitro/nitro-prerenderer.mjs';
import 'file:///workspace/KubeCamp/node_modules/ofetch/dist/node.mjs';
import 'file:///workspace/KubeCamp/node_modules/destr/dist/index.mjs';
import 'file:///workspace/KubeCamp/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///workspace/KubeCamp/node_modules/hookable/dist/index.mjs';
import 'file:///workspace/KubeCamp/node_modules/scule/dist/index.mjs';
import 'file:///workspace/KubeCamp/node_modules/klona/dist/index.mjs';
import 'file:///workspace/KubeCamp/node_modules/defu/dist/defu.mjs';
import 'file:///workspace/KubeCamp/node_modules/ohash/dist/index.mjs';
import 'file:///workspace/KubeCamp/node_modules/ufo/dist/index.mjs';
import 'file:///workspace/KubeCamp/node_modules/unstorage/dist/index.mjs';
import 'file:///workspace/KubeCamp/node_modules/unstorage/drivers/fs.mjs';
import 'file:///workspace/KubeCamp/node_modules/unstorage/drivers/memory.mjs';
import 'file:///workspace/KubeCamp/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///workspace/KubeCamp/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///workspace/KubeCamp/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///workspace/KubeCamp/node_modules/pathe/dist/index.mjs';
import 'file:///workspace/KubeCamp/node_modules/shikiji/dist/index.mjs';
import 'file:///workspace/KubeCamp/node_modules/shikiji-transformers/dist/index.mjs';
import 'file:///workspace/KubeCamp/node_modules/unified/index.js';
import 'file:///workspace/KubeCamp/node_modules/mdast-util-to-string/index.js';
import 'file:///workspace/KubeCamp/node_modules/micromark/index.js';
import 'file:///workspace/KubeCamp/node_modules/unist-util-stringify-position/index.js';
import 'file:///workspace/KubeCamp/node_modules/micromark-util-character/index.js';
import 'file:///workspace/KubeCamp/node_modules/micromark-util-chunked/index.js';
import 'file:///workspace/KubeCamp/node_modules/micromark-util-resolve-all/index.js';
import 'file:///workspace/KubeCamp/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///workspace/KubeCamp/node_modules/slugify/slugify.js';
import 'file:///workspace/KubeCamp/node_modules/remark-parse/index.js';
import 'file:///workspace/KubeCamp/node_modules/remark-rehype/index.js';
import 'file:///workspace/KubeCamp/node_modules/remark-mdc/dist/index.mjs';
import 'file:///workspace/KubeCamp/node_modules/hast-util-to-string/index.js';
import 'file:///workspace/KubeCamp/node_modules/github-slugger/index.js';
import 'file:///workspace/KubeCamp/node_modules/detab/index.js';
import 'file:///workspace/KubeCamp/node_modules/remark-emoji/index.js';
import 'file:///workspace/KubeCamp/node_modules/remark-gfm/index.js';
import 'file:///workspace/KubeCamp/node_modules/rehype-external-links/index.js';
import 'file:///workspace/KubeCamp/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///workspace/KubeCamp/node_modules/rehype-sort-attributes/index.js';
import 'file:///workspace/KubeCamp/node_modules/rehype-raw/index.js';

const opensearch_xml = defineEventHandler(async () => {
  var _a, _b, _c, _d;
  const config = useAppConfig();
  return '<?xml version="1.0"?>\n<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">\n  <ShortName>' + ((_a = config == null ? void 0 : config.docus) == null ? void 0 : _a.title) + "</ShortName>\n  <Description>" + ((_b = config == null ? void 0 : config.docus) == null ? void 0 : _b.description) + '</Description>\n  <Image width="16" height="16" type="image/x-icon">' + ((_c = config == null ? void 0 : config.docus) == null ? void 0 : _c.url) + '/favicon.ico</Image>\n  <Url type="text/html" template="' + ((_d = config == null ? void 0 : config.docus) == null ? void 0 : _d.url) + '">\n    <Param name="q" value="{searchTerms}"/>\n  </Url>\n</OpenSearchDescription>';
});

export { opensearch_xml as default };
//# sourceMappingURL=opensearch.xml.mjs.map

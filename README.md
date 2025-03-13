This app implements a component from the `@ui5/webcomponents`, `@ui5/webcomponents-fiori` and the `@ui5/webcomponents-react` package per default.

1. `npm i`
2. `npm run build`

When importing Assets from the `@ui5/webcomponents-react` (`import '@ui5/webcomponents-react/dist/Assets.js';`) package, the following Assets are added:

```ts
import "@ui5/webcomponents/dist/Assets.js"; //ui5wc assets
import "@ui5/webcomponents-fiori/dist/Assets.js"; //ui5wc-fiori assets
import "./json-imports/i18n-fetch.js"; //ui5wcr assets
import "./json-imports/i18n.js"; //ui5wcr assets
```

Different bundle sizes with different assets (bundled via `tsc && vite build`):

_If not stated otherwise, the BarcodeScannerDialog was not imported_

- all assets: 13M
- all assets + BarCodeScannerDialog component: 14M
- no assets: 724K
- without fiori assets: 12M
- only ui5wcr assets: 1.6M

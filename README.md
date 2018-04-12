# create-react-app@1.5.2 and @storybook/cli@3.4.1

using `create-react-app@1.5.2` and `storybook@3.4.1` to load multiple stories at once

* all you need is [`./.storybook/config.js`](./.storybook/config.js)

steps to reproduce it:

```bash
$ npx create-react-app my-app
$ cd my-app
$ npx @storybook/cli@3.4.1 getstorybook
$ vim ./storybook/config.js
```

replace its contents by the following:

```javascript
import { configure } from "@storybook/react";

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

/**
 * here is where you change the load glob for `storybook`
 * feel free to replace it by your own
 */
function loadStories() {
  requireAll(require.context("../src", true, /_story\.jsx?$/));
}

configure(loadStories, module);
```

# create-react-app@3.4.0 and @storybook/cli@5.3.14

using `create-react-app@3.4.0` and `storybook@5.3.14` to load multiple stories at once

storybook create a preset for [create-react-app integration](https://github.com/storybookjs/presets/tree/master/packages/preset-create-react-app)

this repository is based on the [manual steps for react guide from storybook](https://storybook.js.org/docs/guides/guide-react/),

to reproduce it, you can do:

```bash
npx create-react-app my-app
cd my-app
npm install --save-dev @storybook/react @storybook/preset-create-react-app

# some nice addons
npm install --save-dev @storybook/addon-actions @storybook/addon-links
```

and last, but not least, create `.storybook/main.js`:

```javascript
module.exports = {
  stories: ['../src/**/*.stories.[tj]s'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
};
```

and you are good to go! 🥳

# 📜 Previous Version

Looking for previous version of create-react-app and storybook?

Check [create-react-app@1.5.2 and @storybook/cli@3.4.1](https://github.com/oieduardorabelo/cra-and-storybook/tree/with-previous-version) tag! 🚀
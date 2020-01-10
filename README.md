# Great State Burgers Mobile Nav Menu

This is a [Parcel](https://github.com/parcel-bundler/parcel)-powered project.

### Demo

https://saltymouse.github.io/gsb-mobile-menu/

### Browsers Tested

Only tested these latest evergreen browsers.

- Firefox (desktop)
- Safari (macOS)
- Safari (iOS)
- Chrome (desktop)

## Requirements

- [`node`](https://nodejs.org/en/download/) (v10.16.0)
- [`npm`](https://nodejs.org/en/download/) (v6.9.0)
  - or [`yarn`](https://github.com/yarnpkg/yarn/) 😎

## Development

1. Clone this repository (`git clone <repo-url>`)
2. `yarn` or `npm install` to install project dependencies
3. `yarn start` or `npm run start` to start local dev server

## Publishing

> `yarn deploy` is provided for publishing to Github pages, else...

1. `rm -r ./build` or otherwise delete the `build` directory
2. `yarn build` to compile the optimized assets
3. Upload the generated `build` directory to the web server of your choice

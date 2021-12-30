# Atomize

A static documentation site generator based on the Atom One [Dark](https://github.com/atom/atom/tree/master/packages/one-dark-ui) & [Light](https://github.com/atom/atom/tree/master/packages/one-light-ui) theme.

## Features:

- 📃 Write docs with [.mdx](https://mdxjs.com/)
- 🌜 Dark mode support with [next-themes](https://github.com/pacocoursey/next-themes)
- ✏️ Automatic code highlighting of code blocks and inline code snippets with [shiki](https://github.com/shikijs/shiki) and [mdx-pretty-code](https://github.com/atomiks/mdx-pretty-code)
- 🚢 Easy deployment to GitHub pages with GitHub Actions

This project contains everything needed to start creating a beautifull documentation site.

## Installation

> Atomize requires Node >= 14

### GitHub Template

[Create a reopo from this template on GitHub](https://github.com/LukasCornille/atomize/generate)

### Clone to local

You can also use [create-next-app](https://nextjs.org/docs/api-reference/create-next-app) with:

```shell
# With npm
npx create-next-app -e https://github.com/LukasCornille/atomize

# With yarn
yarn create next-app -e https://github.com/LukasCornille/atomize
```

## Checklist

After you've created a new project, follow these steps to ensure to update the project' info with this checklist

- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `index.tsx`
- [ ] Change the favicon in public
- [ ] Enable [GitHub pages](https://docs.github.com/en/pages/quickstart) for your repo
- [ ] Clean up the README and pages

That's it, have fun!

## Usage

### Development

Run the following command and visit [http://localhost:3000](http://localhost:3000)

```shell
npm run dev
```

### Production

To get a working production site run:

```shell
npm run build
```

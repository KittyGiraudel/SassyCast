# SassyCast

[![GitHub release](https://img.shields.io/github/release/bameyrick/SassyCast.svg)](https://github.com/bameyrick/SassyCast/releases)
[![Travis tests](https://img.shields.io/travis/bameyrick/SassyCast.svg)](https://travis-ci.org/bameyrick/SassyCast)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4a5be5166ef6447399606e170fdba9c0)](https://www.codacy.com/manual/bameyrick/SassyCast)
[![GitHub issues](https://img.shields.io/github/issues/bameyrick/SassyCast)](https://github.com/bameyrick/SassyCast/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/bameyrick/SassyCast.svg)](https://github.com/bameyrick/SassyCast/pulls)
[![Github last commit](https://img.shields.io/github/last-commit/bameyrick/SassyCast.svg)](https://github.com/bameyrick/SassyCast/commits)

SassyCast is a simple API for type conversion in Sass. Read [API documentation](https://sassy-cast.netlify.com/).

## Installation

```
npm install sassy-cast
```

```
yarn add sassy-cast
```

## Notes

SassCast has a strict mode in which it will throw errors when failing to cast values (most notably to colors and numbers). You can enable strict-mode with:

```scss
$sc-strict-mode: true;
```

In non-strict mode, when a value cannot be converted to a number, SassyCast will warn and return `0`. You can change this value with:

```scss
$sc-non-strict-default-number: 0;
```

In non-strict mode, when a value cannot be converted to a color, SassyCast will warn and return `transparent`. You can change this value with:

```scss
$sc-non-strict-default-color: transparent;
```

Note that color formats are sometimes converted automatically by Sass depending on the type of syntax used (compressed, expanded, etc.). When casting a color to string, the resulting string can be different from the color input.

## Credits

Originally created by [Hugo Giraudel](https://github.com/HugoGiraudel)

Huge thanks to [Marc Mintel](http://twitter.com/marcmintel) for his help.

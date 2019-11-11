# SassyCast

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

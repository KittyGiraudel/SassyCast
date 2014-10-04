SassyCast
=========

SassyCast is a simple API for type conversion in Sass.

# Installation
Download [from Github] (https://github.com/HugoGiraudel/SassyCast/archive/master.zip) or ..

## Install via ruby gems
```
gem install SassyCast
````

## Install via bower
```
bower install sassy-cast
```

## `to-bool`

``` scss
to-bool(false);                 // false
to-bool(0);                     // false
to-bool(null);                  // false
to-bool("");                    // false
to-bool(true);                  // true
to-bool(1);                     // true
to-bool(());                    // true
to-bool(string);                // true
to-bool("quoted string");       // true
to-bool(this is a list);        // true
to-bool((this: is a map));      // true
to-bool(1337);                  // true
to-bool(#000);                  // true
```

## `to-number`

``` scss
to-number(1337);                // 1337
to-number("0");                 // 0
to-number("42");                // 42
to-number("4.2");               // 4.2
to-number("-10");               // -10
to-number("-10px");             // -10px
to-number(true);                // 1
to-number(false);               // 0
to-number(string);              // 0
to-number(this is a list);      // 0
to-number((this: is a map));    // 0
to-number(null);                // 0
to-number(#000);                // 0
```

## `to-list`

``` scss
to-list(0);                     // 0
to-list(1);                     // 1
to-list(string);                // string
to-list(this is a list);        // this is a list
to-list(this: is a map);        // this, is a map
to-list(true);                  // true
to-list(false);                 // false
to-list(null);                  // null
to-list(#000);                  // #333
```

## `to-string`

``` scss
to-string(0);                   // "0"
to-string(1);                   // "1"
to-string(true);                // "true"
to-string(false);               // "false"
to-string(null);                // "null"
to-string(this is a list);      // "this is a list"
to-string(this, is, a, list);   // "this, is, a, list"
to-string((this: is a map));    // "(this: is a map)"
to-string((this: is, a, map));  // "(this: is, a, map)"
to-string(#000);                // "#333"
```

## `to-null`

``` scss
to-null(null);                  // null
to-null(0);                     // null
to-null(1);                     // null
to-null(string);                // null
to-null(this is a list);        // null
to-null(this: is a map);        // null
to-null(true);                  // null
to-null(false);                 // null
to-null(#333);                  // null
```

## `to-map`

``` scss
to-map(0);                      // (1: 0)
to-map(1);                      // (1: 1)
to-map(true);                   // (1: true)
to-map(false);                  // (1: false)
to-map(null);                   // (1: null)
to-map(string);                 // (1: string)
to-map(this is a list);         // (1: this, 2: is, 3: a, 4: map)
to-map(this: is a map);         // (this: is a map)
```

## `to-color`

``` scss
to-color(0);                    // null
to-color(1);                    // null
to-color(black);                // black
to-color(#000);                 // black
to-color("#000");               // black
to-color(true);                 // null
to-color(false);                // null
to-color(null);                 // null
to-color(string);               // null
to-color(this is a list);       // null
to-color((this: is a map));     // null
```

## A few things to note:

* When trying to cast something to a number that cannot be converted, it returns `0`
* When trying to cast something to a color that cannot be converted, it returns `null`
* Casting to a map use `1` as key (and index in case of a list)
* Color formats are sometimes converted automatically by Sass; when casting a color to string, the resulting string can be different from the color input

## Credits

Huge thanks to [Marc Mintel](http://twitter.com/marcmintel) for his help.

SassyCast
=========

SassyCast is a simple API for type conversion in Sass.

* `to-bool`
* `to-number`
* `to-list`
* `to-map`
* `to-null`
* `to-string`
* `to-color`

## A few things to note:

* When trying to cast something to a number that cannot be converted, it returns `0`
* When trying to cast something to a color that cannot be converted, it returns `null`
* Casting to a map use `1` as key (and index in case of a list)
* Color formats are converted automatically by Sass; when casting a color to string, the resulting string can be different from the color input
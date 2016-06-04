# Changelog

* `2.0.0`: 
  * No more distinction between public and private APIs. The public API (`to-*` functions) remains unchanged, but the private one (`_sc-to-*` functions) has been removed.
  * A strict mode toggle has been added (`$sc-strict-mode`): SassyCast will throw when not able to convert to color / number, or return a default value with a warning in non-strict mode.
  * Default value for color casting in non-strict mode is now `transparent`, not `null`, to make conversion always return the expected type.
  * Default value for color casting in non-strict mode can be configured through `$sc-non-strict-default-color` variable.
  * Default value for number casting in non-strict mode can be configured through `$sc-non-strict-default-number` variable.
  * `$keep` parameter for `to-list(..)` does not exist anymore.
  * `to-number(..)` now correctly cast stringified numbers with units `deg`, `rad`, `grad`, `turn`, `s`, `ms`, `dpi`, `dpcm`, `dppx`, `Hz` and `kHz`.
  * Code quality has been dramatically improved.
* `1.1.1`: improved things here and there and added SassDoc compliant comments
* `1.1.0`: dissociated error checking from function logic, and fixed some minor things
* `1.0.0`: `to-list` improvements, stable API
* `0.0.1`: initial commit

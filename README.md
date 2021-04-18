safename
========

Remove diacritics from strings

[![Build Status](https://travis-ci.org/jacoborus/safename.svg?branch=master)](https://travis-ci.org/jacoborus/safename)


## Example

```js
import { safename } from 'safename'

safename('My file name 1234 Ñáëîò~')
// => My_file_name_1234_Naeio

safename('My file name 1234 Ñáëîò~', '.')
// => My.file.name.1234.Naeio
```

## Usage

```
safename( name, space )
```

**Parameters:**

- **name** *String*: string to transform
- **space** *String*: replace for spaces. Optional, low dash (&#x27;_&#x27;) by default
- **Return** *String*: safe name



## Installation

Install with npm
```
$ npm install safename
```

Install with Yarn
```
$ yarn add safename
```


Tests
-----

```
npm install && npm test
```

<br><br>

---

© 2014-2021 [Jacobo Tabernero Rey](https://github.com/jacoborus)

Released under [MIT License](https://raw.github.com/jacoborus/safename/master/LICENSE)

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

© 2014 [jacoborus](https://github.com/jacoborus)

Released under [MIT License](https://raw.github.com/jacoborus/safename/master/LICENSE)

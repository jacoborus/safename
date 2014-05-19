safename
========

Get safe file name from a given string.


## Installation

Install with npm
```
$ npm install safename
```

Install with Bower
```
$ bower install safename
```


## Example

```js
// require only in node/browserify
var safename = require( 'safename' );

safename('my file name.txt');
// => my_file_name.txt

safename('my file name.txt', '-');
// => my-file-name.txt

safename.low('my file name.txt');
// => my_file_name.txt

safename.middle('my file name.txt', '-');
// => my-file-name.txt
```


safename API
============


- [safename](#safename)
- [low](#low)
- [middle](#middle)

<a name="safename"></a>
safename( filename, space )
------------------------------------------------------------

Get safe name for files

**Parameters:**

- **filename** *String*: string to transform
- **space** *String*: replace for spaces. Optional, low dash (&#x27;_&#x27;) by default
- **Return** *String*: safe name




<a name="low"></a>
low(  )
------------------------------------------------------------

Safe name with low dash '_'
Same as `safename('your file name.txt', '_');`



<a name="middle"></a>
middle(  )
------------------------------------------------------------

Safe name with middle dash '-'
Same as `safename('your file name.txt', '-');`



Tests
-----

```
npm install && npm test
```

Build API docs
--------------

```
npm install && npm run build-docs
```


<br><br>

---

© 2014 [jacoborus](https://github.com/jacoborus)

Released under [MIT License](https://raw.github.com/jacoborus/safename/master/LICENSE)
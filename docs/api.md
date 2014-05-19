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

**Parameters:**





<a name="middle"></a>
middle(  )
------------------------------------------------------------

Safe name with middle dash '-'
Same as `safename('your file name.txt', '-');`

**Parameters:**







# sanitize-latex
A small wrapper for generating PDFs with LaTeX in Node.

## Install

```
npm install sanitize-latex
```

## Usage

```js
const sanitize = require('sanitize-latex')

const unsanitizedString = '\\ ${Hello} %there^'
const sanitizedString = sanitize(unsanitizedString)

console.log(sanitizedString) // String: \textbackslash{} \$\{Hello\}
```

## API

### sanitize(str)

#### str {String}
The LaTeX string to be normalized.

## License
MIT

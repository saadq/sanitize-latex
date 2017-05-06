/**
 * Sanitizes a string by replacing all hazardous LaTeX symbols with their descriptive names.
 *
 * @param str {string} - The string to be normalized.
 *
 * @return {string}
 */
function sanitize(str) {
  const symbolMap = {
    '\'': '\\textquotesingle{}',
    '"': '\\textquotedbl{}',
    '`': '\\textasciigrave{}',
    '^': '\\textasciicircum{}',
    '~': '\\textasciitilde{}',
    '<': '\\textless{}',
    '>': '\\textgreater{}',
    '|': '\\textbar{}',
    '\\': '\\textbackslash{}',
    '{': '\\{',
    '}': '\\}',
    '$': '\\$',
    '&': '\\&',
    '#': '\\#',
    '_': '\\_',
    '%': '\\%'
  }

  return Array.from(str)
    .map(char => symbolMap[char] || char)
    .join('')
}

module.exports = sanitize

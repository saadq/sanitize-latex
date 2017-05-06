import test from 'ava'
import sanitize from '..'

test('sanitizer normalizes latex symbols', async (t) => {
  t.plan(1)

  const input = `
    <HELLO | THERE>
    {
    \\
    <
    |
    >
    ^
    ~
    _
    %
    $
    &
    #
    }
    \`
    '
    "
  `

  const expected = `
    \\textless{}HELLO \\textbar{} THERE\\textgreater{}
    \\{
    \\textbackslash{}
    \\textless{}
    \\textbar{}
    \\textgreater{}
    \\textasciicircum{}
    \\textasciitilde{}
    \\_
    \\%
    \\$
    \\&
    \\#
    \\}
    \\textasciigrave{}
    \\textquotesingle{}
    \\textquotedbl{}
  `
  const actual = sanitize(input)

  t.is(expected, actual)
})

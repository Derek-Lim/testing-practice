/* eslint-disable no-undef */
import { capitalize, reverseString, Calculator, caesarCipher, analyzeArray } from './index.js'

test('Capitalize', () => {
  expect(capitalize('cat')).toBe('Cat')
  expect(capitalize('CAT')).toBe('Cat')
  expect(capitalize('cat-tail')).toBe('Cat-tail')
  expect(capitalize('i will molest your cat. HEHEHE')).toBe('I will molest your cat. hehehe')
})

test('reverseString', () => {
  expect(reverseString('cat')).toBe('tac')
  expect(reverseString('jesus christ')).toBe('tsirhc susej')
})

test('Calculator', () => {
  const calc = Calculator()
  expect(calc.add(1, 2)).toBe(3)
  expect(calc.subtract(1, 2)).toBe(-1)
  expect(calc.divide(1, 2)).toBe(0.5)
  expect(calc.multiply(1, 2)).toBe(2)
})

test('caesarCipher', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc')
  expect(caesarCipher('abc', -3)).toBe('xyz')
  expect(caesarCipher('XYZ', 3)).toBe('ABC')
  expect(caesarCipher('ABC', -3)).toBe('XYZ')
  expect(caesarCipher('!@#$%^&*()abc', 3)).toBe('!@#$%^&*()def')
  expect(caesarCipher('Ildhyl aol pklz vm thyjo.', -7)).toBe('Beware the ides of march.')
  expect(caesarCipher('cat', -52)).toBe('cat')
})

test('analyzeArray', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
  expect(analyzeArray([100, 200, -300])).toEqual({
    average: 0,
    min: -300,
    max: 200,
    length: 3
  })
})

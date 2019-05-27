import test from 'ava'
import arrIncludes from '../src/array-includes'

test('Check if array with number contains number', t => {
  const array = [1, 2, 3, 4]
  const type = 'number'
  const expected = true
  const actual = arrIncludes(array, type)
  t.deepEqual(actual, expected)
})

test('Check if array without number contains number', t => {
  const array = ['a', 'b', 'c']
  const type = 'number'
  const expected = false
  const actual = arrIncludes(array, type)
  t.deepEqual(actual, expected)
})

test('Check if array with object contains object', t => {
  const array = ['a', 'b', 'c', {}]
  const expected = true
  const actual = arrIncludes(array)
  t.deepEqual(actual, expected)
})

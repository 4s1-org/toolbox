import { DefaultError } from './default-error'
import { assertSet, isSet } from './utils'
import test from 'ava'

test('isSet() - Value is a string', (t) => {
  // Arrange
  const testVar = 'foobar'
  // Act
  const res = isSet(testVar)
  // Assert
  t.is(res, true)
})

test('isSet() - Value is 0', (t) => {
  // Arrange
  const testVar = 0
  // Act
  const res = isSet(testVar)
  // Assert
  t.is(res, true)
})

test('isSet() - Value is null', (t) => {
  // Arrange
  const testVar = null
  // Act
  const res = isSet(testVar)
  // Assert
  t.is(res, false)
})

test('isSet() - Value is undefined', (t) => {
  // Arrange
  const testVar = undefined
  // Act
  const res = isSet(testVar)
  // Assert
  t.is(res, false)
})

test('assertSet() - Value is a string', (t) => {
  // Arrange
  const testVar = 'foobar'
  // Act
  const fct = (): void => {
    assertSet(testVar)
  }
  // Assert
  t.notThrows(fct)
})

test('assertSet() - Value is 0', (t) => {
  // Arrange
  const testVar = 0
  // Act
  const fct = (): void => {
    assertSet(testVar)
  }
  // Assert
  t.notThrows(fct)
})

test('assertSet() - Value is null', (t) => {
  // Arrange
  const testVar = null
  // Act
  const fct = (): void => {
    assertSet(testVar)
  }
  // Assert
  t.throws(fct, { instanceOf: DefaultError })
})

test('assertSet() - Value is undefined', (t) => {
  // Arrange
  const testVar = undefined
  // Act
  const fct = (): void => {
    assertSet(testVar)
  }
  // Assert
  t.throws(fct, { instanceOf: DefaultError })
})

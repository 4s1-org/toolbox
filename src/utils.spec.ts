import { DefaultError } from './default-error'
import { assertSet, isSet } from './utils'

describe('Utils', () => {
  describe('isSet()', () => {
    it('Value is a string', () => {
      // Arrange
      const testVar = 'foobar'
      // Act
      const res = isSet(testVar)
      // Assert
      expect(res).toEqual(true)
    })

    it('Value is 0', () => {
      // Arrange
      const testVar = 0
      // Act
      const res = isSet(testVar)
      // Assert
      expect(res).toEqual(true)
    })

    it('Value is null', () => {
      // Arrange
      const testVar = null
      // Act
      const res = isSet(testVar)
      // Assert
      expect(res).toEqual(false)
    })

    it('Value is undefined', () => {
      // Arrange
      const testVar = undefined
      // Act
      const res = isSet(testVar)
      // Assert
      expect(res).toEqual(false)
    })
  })

  describe('assertSet()', () => {
    it('Value is a string', () => {
      // Arrange
      const testVar = 'foobar'
      // Act
      const fct = (): void => {
        assertSet(testVar)
      }
      // Assert
      expect(fct).not.toThrow(DefaultError)
    })

    it('Value is 0', () => {
      // Arrange
      const testVar = 0
      // Act
      const fct = (): void => {
        assertSet(testVar)
      }
      // Assert
      expect(fct).not.toThrow(DefaultError)
    })

    it('Value is null', () => {
      // Arrange
      const testVar = null
      // Act
      const fct = (): void => {
        assertSet(testVar)
      }
      // Assert
      expect(fct).toThrow(DefaultError)
    })

    it('Value is undefined', () => {
      // Arrange
      const testVar = undefined
      // Act
      const fct = (): void => {
        assertSet(testVar)
      }
      // Assert
      expect(fct).toThrow(DefaultError)
    })
  })
})

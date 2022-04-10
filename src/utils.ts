import { AssertionError } from './assertion-error'

/**
 * Check parameter to be unequals undefined and unequals null.
 */
export function isSet<T>(value: T | undefined | null): value is NonNullable<T> {
  return value !== undefined && value !== null
}

/**
 * Throws an error of parameter is undefined or null.
 */
export function assertSet<T>(value: T | undefined | null): asserts value is NonNullable<T> {
  if (value === undefined || value === null) {
    throw new AssertionError(`Expected value to be defined, but received ${value}`)
  }
}

// Wrapper for Omit to modify an existing definition
export type Modify<T, K> = Omit<T, keyof K> & K

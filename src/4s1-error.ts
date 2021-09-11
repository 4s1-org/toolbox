export class FourS1Error extends Error {
  constructor(msg: string) {
    super(msg)

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, FourS1Error.prototype)
  }
}

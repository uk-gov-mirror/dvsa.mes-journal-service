export class TestCentreNotFoundError extends Error {
  constructor() {
    super();
    Object.setPrototypeOf(this, TestCentreNotFoundError.prototype);
  }
}

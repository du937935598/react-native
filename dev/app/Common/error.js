export class NotFoundError extends Error {
    constructor(message) {
      super(`Not Found! Params: ${message}`);
      this.name = 'NotFoundError';
      this.stack = new Error().stack; // Optional
    }
  }
  // NotFoundError.prototype = Object.create(Error.prototype);
  
  export class ExpiredError extends Error {
    constructor(message) {
      super(`Expired! Params: ${message}`);
      this.name = 'ExpiredError';
      this.stack = new Error().stack; // Optional
    }
  }
/**
 * Please add all errors here.
 */

/**
 * Base error class enherited by all custom errors
 */
export class CustomError {
  constructor(code, status, message) {
    this.code = code;
    this.statusCode = status;
    this.statusMessage = message;
    this.context = [];
  }

  /**
   * Adds context to the error. For example, adding stack trace of the error
   * @param {*} ctx Context for error
   * @returns this
   */
  addContext(ctx) {
    this.context.push(ctx);
    return this;
  }

  /**
   * Formats the error depending on where it is being displayed
   * @param {Boolean} clientFacing Flag which determines where error will be displayed
   * @returns Error Message
   */
  format(clientFacing) {
    let message = null;
    if (clientFacing) {
      message = `ERROR: ${this.statusMessage}`;
    } else {
      message = `ERROR: Type ${this.constructor.name}, Code ${
        this.code
      }, CONTEXT - ${
        this.context.length ? `\n${this.context.join("\n\n")}` : null
      }`;
    }
    return message;
  }
}

/**
 * ServiceError are errors which appear while processing the client's request
 */
const CATEGORY_NOT_FOUND_MSG = "Category Name you specified does not exist";
const VIS_NOT_FOUND_MSG = "Visualization Name you specified does not exist";
const INVALID_CATEGORY_RECEIVED_MSG =
  "Invalid Category payload received, make sure you have all required fields.";
const INVALID_VISUALIZATION_RECEIVED_MSG =
  "Invalid Category payload received, make sure you have all required fields.";

export class ServiceError extends CustomError {
  static CATEGORY_NOT_FOUND = new ServiceError(1, 404, CATEGORY_NOT_FOUND_MSG);
  static VIS_NOT_FOUND = new ServiceError(1, 404, VIS_NOT_FOUND_MSG);
  static INVALID_CATEGORY_RECEIVED = new ServiceError(
    0,
    400,
    INVALID_CATEGORY_RECEIVED_MSG
  );
  static INVALID_CATEGORY_RECEIVED = new ServiceError(
    0,
    400,
    INVALID_VISUALIZATION_RECEIVED_MSG
  );
}

/**
 * InternalError are those that are not relevant to the client
 */
const INTERNAL_ERROR_MSG = "An internal server error occured";
export class InternalError extends CustomError {
  static UNKNOWN = new InternalError(0);

  constructor(code, status, message) {
    super(code, status, message);
    if (!status) this.status = 500;
    if (!message) this.message = INTERNAL_ERROR_MSG;
  }
}

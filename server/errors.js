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
 * Validation Error contains errors that appear while validating client inputs
 */
const INVALID_OBJECT_ID_RECEIVED_MSG =
  "Invalid ID was found, ID must be a string of 12 bytes or a string of 24 hex characters";
const INVALID_BOOLEAN_VALUE_MSG =
  "Invalid boolean value was found in the request, expected true/false";
const USER_NOT_IN_SESSION_MSG = "No user found in session";
const INVALID_PAGINATION_INPUT = "Incorrect pagination values received";
export class ValidationError extends CustomError {
  static INVALID_OBJECT_ID = new ValidationError(
    0,
    400,
    INVALID_OBJECT_ID_RECEIVED_MSG
  );

  static INVALID_BOOLEAN_VALUE = new ValidationError(
    1,
    400,
    INVALID_BOOLEAN_VALUE_MSG
  );

  static USER_NOT_IN_SESSION = new ValidationError(
    2,
    400,
    USER_NOT_IN_SESSION_MSG
  );

  static INVALID_PAGINATION_INPUT = new ValidationError(
    3,
    400,
    INVALID_PAGINATION_INPUT
  );
}

/**
 * ServiceError are errors which appear while processing the client's request
 */
const CATEGORY_NOT_FOUND_MSG = "Category ID you specified does not exist";

export class ServiceError extends CustomError {
  static CATEGORY_NOT_FOUND = new ServiceError(1, 404, CATEGORY_NOT_FOUND_MSG);
}

/**
 * InternalError are those that are not relevant to the client
 */
const INTERNAL_ERROR_MSG = "An internal server error occured";
export class InternalError extends CustomError {
  static IMAGE_UPLOAD_ERROR = new InternalError(0);

  static IMAGE_DELETE_ERROR = new InternalError(1);

  static JOB_DELETE_ERROR = new InternalError(2);

  static USER_NOT_FOUND = new InternalError(3, 404);

  static DOCUMENT_UPLOAD_ERROR = new InternalError(4);

  static UNKNOWN = new InternalError(5); // for any unknown error

  static OTHER = new InternalError(6); // for all known errors, not belonging to the above categories

  constructor(code, status, message) {
    super(code, status, message);
    if (!status) this.status = 500;
    if (!message) this.message = INTERNAL_ERROR_MSG;
  }
}

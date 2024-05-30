class HttpError extends Error {
  status: number;

  constructor(
    status: number,
    message: string | undefined = errorMessageList[status]
  ) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
  }
}

const errorMessageList: { [key: number]: string } = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
};

export default HttpError;

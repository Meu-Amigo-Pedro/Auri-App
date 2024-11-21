abstract class ApplicationError {
  constructor (
    readonly statusCode: number,
    readonly code: string,
    readonly message: string
  ) {}
}

export default ApplicationError
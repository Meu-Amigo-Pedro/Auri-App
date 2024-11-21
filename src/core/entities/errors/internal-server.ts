import ApplicationError from "./base";

class InternalServerError extends ApplicationError {
  constructor () { super(500, "INTERNAL_SERVER_ERROR", "Ocorreu um erro interno no servidor") }
}

export default InternalServerError
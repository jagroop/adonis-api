'use strict'

class StoreUser {
  get rules () {
    return {
      email: 'required|email|unique:users',
      password: 'required'
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = StoreUser
